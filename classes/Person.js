class Person{
    
    /**
     * person_id must be a valid person in the database
     * initializes this person
     * @param {json} data 
     */
    constructor(data) {//will be data later on
        
        var obj = data
        this.id = obj.id
        this.name = obj.name
        
        var thisclass = this;
        DB_getGedaanIdsByUserId(this.id, function(gedaanIds){
            thisclass.loadCompletedHistory(gedaanIds);
        });
        
    }

    loadCompletedHistory(completedIds) {
        this.completedHistory = [];
        var thisclass = this;
        completedIds.forEach(row => {
            DB_getGedaanById(row.id, function(data) {
                let newCompleted = new Completed(data);
                thisclass.addCompletedToHistory(newCompleted);
            })
        });
    }

    addCompletedToHistory(Completed) {
        this.completedHistory.push(Completed);
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
     * TODO change this to having a default gedaan list and calculating it from that
     */
    getBalance(){
        var balance = 0;
        this.completedHistory.forEach(completed => {
            this.balance += completed.getPrice().getAmount();
        });
        return balance;
    }




    //here the static function stuff

    static person_list = []

    static clearPersonList() {
        this.person_list = [];
    }

    static getAllPeople() {
        return this.person_list;
    }

    static getPersonById(person_id) {
        this.person_list.forEach(person => {
            if (person.getId() == person_id) {
                return person;
            }
        });
        return null;
    }

    static createPerson(person_data, callback) {
        var newPerson = new Person(person_data, function(){
            person_list.push(newPerson)
            callback(newPerson);
        });
    }

    static setPeopleAsInDatabase(callback) {
        this.clearPersonList();
        DB_getPersoonIds( function(data){
            data.forEach(row => {
                DB_getPersonById(row.id, function(data2){
                    Person.createPerson(data2, function(){
                        if(Person.getAllPeople.length == data.length) {
                            callback();
                        }
                    })
                });
            });
        });
    }

}