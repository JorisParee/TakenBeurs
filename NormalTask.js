class normalTask extends task {

    /**
     * initialies the task with its values
     * 
     * @param {id} task needs to refer to normal task in database;
     * 
     * @override
     */
    constructor(task_id) {
        super();
        this.initialize(task_id);
    }

    /**
     * initialize the task with all values from the database
     * pricehistory and donehistory may not be empty;
     * 
     * @param task needs to refer to task in database;
     * 
     * @override
     */
    initialize(task_id) {
        //acces data from the database
        this.pricehistory = DB_getPriceHistoryByTaskId(task_id);
        this.lastDate = DB_getLastDateDoneFromTaskById(task_id);//todo calculate
        this.name = DB_getTaskNameById(task_id);
        this.id = task_id;
        this.description = DB_getTaakById(task_id)[1];

    }


    /**
     * returns if tast is disabled
     */
    getDisabled() {
        return this.disabled;
    }



    /**
     * set the disabled boolean
     * @param {boolean} disabled_bool 
     * 
     * @modifies the disabled property and also changes it in the database
     */
    setDisabled(disabled_bool) {
        this.disabled = disabled_bool;
        return this.disabled;
        //update in database;
    }

    /**
     * returns the current price of this procuct
     * 
     * @return number being the last availible price;
     * 
     * @returns int:  the current price as a number;
     */
    getCurrentPrice() {
        return this.pricehistory[this.pricehistory.length-1][0];
    }

    /**
     * returns the last date the task was done
     * 
     * @return the last date someone did the task
     */
    getLastDate(){
        return new Date(2021, 2, 1, 20, 13, 0);
    }

    /**
     * gets the history of the prices
     * 
     * @return list being the price history, the first value is first price and last value is last known price;
     * being as a list with values in it: [prijs, datum]
     */
    getPriceHistory() {
        return this.pricehistory;
    }
    

    /**
     * calculates a new prices and sets it.
     */
    setNewPrice(date) {
        //todo change grow, now always 5%
        var newprice;
        newprice = this.getCurrentPrice() * 1.05;
        
        this.updateNewPrice(newprice, date);
    }

    /**
     * updates the price with given values;
     * @param {int} price_int 
     * @param {date} date_value 
     */
    updateNewPrice(price_int, date_value) {
        DB_addPrijs(this.id, price_int, date_value);
        
    }

    update(){
        this.pricehistory = DB_getPriceHistoryByTaskId(this.id);
        this.lastDate = DB_getLastDateDoneFromTaskById(this.id);
    }
    /**
     * sets the taks to done, also updates the database
     * @param {date} date_value 
     */
    setTaskDone(date_value) {
        //add done task to database and update here
        var newprice = this.getCurrentPrice() * 0.9;
        this.updateNewPrice(newprice, date_value);
        this.update();
        this.setDisabled(true);
    }

}