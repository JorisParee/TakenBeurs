class SpecialTask extends Task {

    /**
     * constructor of th especial task
     * initializes the task
     * @param {datobj} task_data
     * @param {function} callback
     */
    constructor(task_data, callback) {
        super(task_data);//already loads id name and description
        this.initialize(task_data);
        callback(this);
    }


    /**
     * initalizes left over values from the database;
     * 
     * @param {id} task_id
     * @override
     */
    initialize(task_id) {
        //gets all values from te database and saves it.
        this.price = 100;
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
        
    }



    //a static list with all the specialtasks at their indexed id.
    static specialTasks = [];

    static getSpecialTaskById(task_id) {
        if (this.specialTasks[task_id] != undefined){
            return this.specialTasks[task_id];
        } else {
            this.load(task_id);
            return this.specialTasks[task_id];
        }
    }

    /**
     * 
     * @param {int} task_id 
     * 
     * @Override
     */
    static load(task_id) {
        DB_getTaskById(id, function(data){
            var newSpecial = new SpecialTask(data);
            specialTask[task_id] = newSpecial;
        })
    }
}