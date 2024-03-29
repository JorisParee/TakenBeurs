class Task{

    /**
     * initializes the task;
     * @param data
     */
    constructor(data) {
        //set the initial values of the task
        var obj = data;
        this.id = obj.id;
        this.name = obj.name;
        this.description = obj.description;
    }
        
    /**
     * gets the id of this task as it is in the database.
     */
    getId() {
        return this.id;
    }

    /**
     * returns the name of this task
     */
    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    /**
     * when the task is done call this
     * will update the task state also in database.
     */
    setTaskDone(){
        // becouse parent
    }

    /**
     * return the current price of this task
     * @return number being the last price;
     */
    getCurrentPrice(){
        //because parrent
    }


}




