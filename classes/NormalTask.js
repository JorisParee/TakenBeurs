class NormalTask extends Task {

    /**
     * initialies the task with its values
     * 
     * @param {id} task_data needs to refer to normal task in database;
     * 
     * @override
     */
    constructor(task_data) {
        super(task_data);//initializes id, name and description
        this.initialize(task_data);
    }

    /**
     * initialize the task with all values from the database
     * pricehistory and donehistory may not be empty;
     * 
     * @param task needs to refer to task in database;
     * 
     * @override
     */
    initialize(task_data) {
        //acces data from the database

        var thisclass = this;
        DB_getPrijsIdsByTaskId(this.id, function(data){
            thisclass.loadPriceHistory(data);
        })
        DB_getGedaanIdsByTaskId(this.id, function(data){
            thisclass.loadCompletedHistory(data);
        })
    }


    loadPriceHistory(PriceIds) {
        this.priceHistory = [];
        var thisclass = this;
        PriceIds.forEach(row => {
            DB_getPrijsById(row.id, function(data){
                let newPrice = new Price(data);
                thisclass.addPriceToHistory(newPrice);
            });
        });
    }

    loadCompletedHistory(CompletedIds) {
        this.completedHistory = [];
        var thisclass = this;
        CompletedIds.forEach(row => {
            DB_getGedaanById(row.id, function(data){
                let newCompleted = new Price(data);
                thisclass.addCompletedToHistory(newCompleted)
            });
        });
    }

    addPriceToHistory(newPrice) {
        this.priceHistory.push(newPrice)
    }

    addCompletedToHistory(newCompleted) {
        this.completedHistory.push(newCompleted);
    }


    /**
     * returns if tast is disabled
     */
    getDisabled() {
        return this.isTaskEnabled();
    }


    /**
     * returns the current price of this procuct
     * 
     * @return number being the last availible price;
     * 
     * @returns int:  the current price as a number;
     */
    getCurrentPrice() {
        return this.getLastPrice().getAmount();
    }

    /**
     * returns the last date the task was done
     * 
     * @return the last date someone did the task
     */
    getLastCompletedDate(){
        return this.getlastCompleted().getDate();
    }

    //still asuming it is the last in the list, change this later to actually be the last for sure
    getLastPrice() {
        return this.priceHistory[this.priceHistory.length -1];
    }

    getlastCompleted() {
        return this.completedHistory[this.completedHistory.length - 1];
    }

    /**
     * gets the history of the prices
     * 
     * @return list being the price history, the first value is first price and last value is last known price;
     * being as a list with values in it: [prijs, datum]
     */
    getPriceHistory() {
        return this.priceHistory;
    }
    



    /**
     * creates a new price instance for this task 
     */
    SetNewPrice() {
        var newPrice = Koers_newPriceForTask(this);
        var currentdate = new Date();
        var thisclass = this;
        DB_addPrijs(this.id, newPrice, currentdate, function(data){
            var price_id = data.insert_id;
            DB_getPrijsById(price_id, function(data2) {
                var addedPrice = new Price(data2);
                thisclass.addPriceToHistory(addedPrice);
            })
        })
    }



    /**
     * sets the taks to done, also updates the database
     * @param {person} user 
     */
    SetTaskDone(user) {
        //add done task to database and update here
        var newPrice = Koers_newPriceForTaskDone(this);
        var currentdate = new Date();
        var thisclass = this;
        DB_addPrijs(this.id, newPrice, currentdate, function(data) {
            var price_id = data.insert_id;
            DB_addGedaan(user.getId(), data, function(data2){
                var gedaan_id = data2.insert_id;
                //adding the price and gedaan to this class.
                DB_getPrijsById(price_id, function(data3){
                    var addedPrice = new Price(data3);
                    thisclass.addPriceToHistory(addedPrice)
                })
                DB_getGedaanById(gedaan_id, function(data4) {
                    var addedGedaan = new Completed(data4);
                    thisclass.addCompletedToHistory(addedGedaan);
                    //add the completed to the user
                    user.addCompleted(addedGedaan);//this should be done differenly to not be dependend
                })
            })
        })
    }

    isTaskEnabled(){
        var lastDate = this.getLastCompletedDate();
        var today = new Date();
        return (today - lastDate >= new Date(604800))
    }

}