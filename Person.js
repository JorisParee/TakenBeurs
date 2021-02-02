class Person{
    
    /**
     * person_id must be a valid person in the database
     * initializes this person
     * @param {id} person_id 
     */
    constructor(person_id) {
        initialize(person_id);
    }

    /**
     * sets all the values for this person gotten from the database;
     * @param {id} person_id must be a valid id of a person in the database;
     */
    initialize(person_id) {
        //gets data from database and initializes the values for this person
        this.name = "J";
        this.taskHistory = [];
        this.balance = -200;
        this.id = person_id;
    }

    /**
     * gets the name from this person
     */
    getName() {
        return this.name;
    }


    /**
     * gets the balance of this person
     */
    getBalance() {
        return this.balance;
    }

    /**
     * gets this id of this person.
     */
    getId() {
        return this.id;
    }


}