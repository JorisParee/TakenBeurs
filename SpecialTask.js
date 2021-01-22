class specialTask extends Task {

    /**
     * constructor of th especial task
     * initializes the task
     * 
     * @override
     */
    constructor(task) {
        super();
        initialize();
    }


    /**
     * initalizes all values from the database;
     * 
     * @param {id} task 
     * @override
     */
    initialize(task_id) {
        //gets all values from te database and saves it.
        this.price = 1;
        this.name = "specialname";
        this.endTime = Date;
        this.id = task_id;
    }

    /**
     * returns the id of this task as in the database
     * 
     * @override
     */
    getId() {
        return this.id;
    }

    /**
     * return the current price as a number
     * 
     * @override
     */
    getCurrentPrice() {
        return this.price;
    }

    /**
     * return the end time of this special
     */
    getEndTime() {
        return this.endTime;
    }

    /**
     * returns the time left till it is the endtime
     */
    getLeftTime() {
        return currenttime - this.getEndTime;
    }


    /**
     * sais task is done, so saves it to database and removes this
     * 
     * @override
     */
    setTaskDone() {
        //set in database done
        this.remove();
    }

    /**
     * removes this special task since it is done.
     */
    remove() {
        
    }
}