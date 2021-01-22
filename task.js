class task {
    constructor(task) {
        this.initialize(task);
    }

    /**
     * initialize the task with all values from the database
     * 
     * @param task 
     */
    initialize(task) {
        //acces data from the database
        this.pricehistory = [];
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
     * @return number being the last availible price;
     */
    getCurrentPrice() {
        return this.pricehistory[this.pricehistory.length];
    }

    getPriceHistory() {
        return this.pricehistory;
    }


}