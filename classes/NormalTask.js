class NormalTask extends Task {

    /**
     * initialies the task with its values
     * 
     * @param {id} task_data needs to refer to normal task in database;
     * @param {function(TaskObject)} callback a callback that returns the created taskObject
     */
    constructor(task_data, callback) {
        super(task_data);//initializes id, name and description
        var thisclass = this
        this.initializeHistory(task_data, function() {
            callback(thisclass)
        });
    }

    /**
     * initialize the task with all values from the database
     * pricehistory and donehistory may not be empty;
     * 
     * @param task_data needs to refer to task in database;
     * @param {fucntion} callback a function to return when it is done
     * 
     */
    initializeHistory(task_data, callback) {
        //acces data from the database

        var thisclass = this;
        thisclass.loadPriceHistory(function(){
            //this is after the pricehistory is loaded, and now start loading completedhistory
            thisclass.loadCompletedHistory(function(){
                //now all is loaded
                callback();
            })
        })


    }


    loadPriceHistory(callback) {
        this.priceHistory = [];
        var thisclass = this;
        DB_getPrijsIdsByTaskId(this.id, function(data) {  
            if (data.length > 0) {
                data.forEach(row => {
                    DB_getPrijsById(row.id, function(data2){
                        let newPrice = new Price(data2);
                        thisclass.addPriceToHistory(newPrice);
                        if (thisclass.priceHistory.length == data.length) {
                            callback();
                        }
                    });
                });
            } else {
                callback()
            }
        });
    }

    loadCompletedHistory(callback) {
        this.completedHistory = [];
        var thisclass = this;
        DB_getGedaanIdsByTaskId(this.id, function(data){ 
            if (data.length > 0) {
                data.forEach(row => {
                    DB_getGedaanById(row.id, function(data2){ 
                        new Completed(data2, function(newCompleted){//this gives error but is not since we use its calback creation
                            thisclass.addCompletedToHistory(newCompleted)
                            if (thisclass.completedHistory.length == data.length) {
                                callback()
                            }
                        });
                        
                    });
                });
            } else {
                callback();
            }
        })
    }

    /**
     * takes a priceObject and adds it to its history
     * @param {priceOBject} newPrice 
     */
    addPriceToHistory(newPrice) {
        this.priceHistory.push(newPrice)
        this.priceHistory.sort(function(a,b){return (new Date(a.getDate()) - new Date(b.getDate()))});
    }
    /**
     * takes a completedObject adn adds it to its history
     * @param {CompletedObject} newCompleted 
     */
    addCompletedToHistory(newCompleted) {
        this.completedHistory.push(newCompleted);
        this.completedHistory.sort(function(a,b){return (new Date(a.getDate()) - new Date(b.getDate()))});
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
        return this.getLastCompleted().getDate();
    }

    //TODO still asuming it is the last in the list, change this later to actually be the last for sure
    getLastPrice() {
        return this.priceHistory[this.priceHistory.length -1];
    }
    //TODO assuming currently it is last in list which is not true
    getLastCompleted() {
        return this.completedHistory[this.completedHistory.length - 1];
    }

    /**
     * gets the history of the prices
     * 
     * @return list being the price history, the first value is first price and last value is last known price;
     * being as a list with Price objects in it
     */
    //TODO order is not actually the order yet
    getPriceHistory() {
        return this.priceHistory;
    }
    
    /**
     * gets the completed of the prices
     * 
     * @return list being the completed history, the first value is first compl and last value is last known compl;
     * being as a list with completed objects in it
     */
    //TODO order is not actually the order yet
    getCompletedHistory() {
        return this.completedHistory;
    }


    /**
     * creates a new price instance for this task 
     * @param {function(priceObject)} callback a callback that gives with the new price object
     */
    setNewPrice(callback) {
        var newPrice = Koers_newPriceForTask(this);
        // currentdate = new Date();
        var thisclass = this;
        DB_addPrijs(this.id, newPrice, function(data){
            var price_id = data.insert_id;
            DB_getPrijsById(price_id, function(data2) {
                var addedPrice = new Price(data2);
                thisclass.addPriceToHistory(addedPrice);
                callback(addedPrice)
            })
        })
    }



    /**
     * sets the taks to done, also updates the database
     * @param {person} user 
     * @param {function(CompletedObject)} callback a callback that gives back the completed object
     */
    setTaskDone(user, callback) {
        //add done task to database and update here
        var newPrice = Koers_newPriceForTaskDone(this);
        //var currentdate = new Date();
        var thisclass = this;
        DB_addPrijs(this.id, newPrice, function(data) {
            var price_id = data.insert_id;
            DB_addGedaan(user.getId(), price_id, function(data2){
                var gedaan_id = data2.insert_id;
                //adding the price and gedaan to this class.
                DB_getPrijsById(price_id, function(data3){
                    var addedPrice = new Price(data3);
                    thisclass.addPriceToHistory(addedPrice)
                    DB_getGedaanById(gedaan_id, function(data4) {
                        new Completed(data4, function(addedGedaan){
                            thisclass.addCompletedToHistory(addedGedaan);
                            //add the completed to the user
                            user.addCompletedToHistory(addedGedaan);//this should be done differenly to not be dependend
                            callback(addedGedaan)
                        });
                    })
                })
            })
        })
    }

    /**
     * 
     * @returns if the task is enabled, so if it is done more than one week ago.
     */
    isTaskEnabled(){
        var lastDate = new Date(this.getLastCompletedDate());//TODO prob need some parsing
        var today = new Date();//TODO make it get date from database or smthn not dependent on local setting
        return (today - lastDate >= new Date(604800000))
    }

    /**
     * 
     * @param {PersonObject} user 
     * @returns if this user is allowed to do it currently.
     */
    isTaskEnabledByUser(user){
        var today = new Date();
        var lastDate = new Date(this.getLastCompletedDate());
        if (today - lastDate < new Date(604800000)){//done withing last week
            return false;//TODO couple this and enabled times
        }
        if (today - lastDate < new Date(604800000*2)){
            //within two weeks of last time
            var lastUserId = this.getLastCompleted().getUserId();
            if (user.getId() == lastUserId){//this is the user that last did it
                return false
            }
        }
        return true
    }




    //try some shit with static functions for creating these tasks with callbacks becouse stupid stuff


    static tasks_list = []

    static clearTaskList() {
        this.tasks_list = [];
    }

    static getAllTasks() {
        return this.tasks_list;
    }

    static getTaskById(task_id) {
        var ans = null
        this.tasks_list.forEach(task => {
            if (task.getId() == task_id) {
                ans =  task;
            }
        });
        return ans;
    }

    static createTask(task_data, callback) {
        var thisclass = this;
        var newTask = new NormalTask(task_data, function(){
            thisclass.tasks_list.push(newTask)
            callback(newTask);
        });
    }

    static setTasksAsInDatabase(callback) {
        this.clearTaskList();
        DB_getTaakIds( function(data) {
            if (data.length > 0) {
                data.forEach(row => {
                    DB_getTaakById(row.id, function(data2){
                        NormalTask.createTask(data2, function(){
                            if(NormalTask.getAllTasks().length == data.length){
                                callback();
                            }
                        })
                    })
                })
            } else {
                callback();
            }
        })
    }


}