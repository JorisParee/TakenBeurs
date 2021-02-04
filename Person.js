class Person{
    
    /**
     * person_id must be a valid person in the database
     * initializes this person
     * @param {id} person_id 
     */
    constructor(person_id) {
        this.initialize(person_id);
    }

    /**
     * sets all the values for this person gotten from the database;
     * @param {id} person_id must be a valid id of a person in the database;
     */
    initialize(person_id) {
        //gets data from database and initializes the values for this person
        this.name = DB_getPersonNameById(person_id);
        this.id = person_id;
    }

    /**
     * gets the name from this person
     */
    getName() {
        return this.name;
    }


    /**
     * gets this id of this person.
     */
    getId() {
        return this.id;
    }

    /**
     * gets the balance of a person
     */
    getBalance(){
        var balance = 0;
        gedaan.forEach(done =>{
            if(done[0] == this.id){
                balance += prijs[done[1]][1];
            }
        })
        return balance;
    }


}