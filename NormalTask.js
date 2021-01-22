class task {
    constructor(task) {
        this.initialize(task);
    }

    /**
     * initialize the task with all values from the database
     * pricehistory and donehistory may not be empty;
     * 
     * @param task 
     */
    initialize(task) {
        //acces data from the database
        this.pricehistory = [];
        this.donehistory = [];
        this.disabled = false;
        this.name = "name";


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
     */
    getCurrentPrice() {
        return this.pricehistory[this.pricehistory.length];
    }

    /**
     * gets the history of the prices
     * 
     * @return list being the price history, the first value is first price and last value is last known price;
     */
    getPriceHistory() {
        return this.pricehistory;
    }
    

    /**
     * calculates a new prices and sets it.
     */
    setNewPrice() {
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

    }


}