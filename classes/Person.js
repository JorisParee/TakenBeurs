class Person{
    
    /**
     * person_id must be a valid person in the database
     * initializes this person
     * @param {json} data 
     */
    constructor(data, callback) {//will be data later on
        
        var obj = data
        this.id = obj.id
        this.name = obj.name
        
        var thisclass = this;
        DB_getGedaanIdsByUserId(this.id, function(gedaanIds){
            thisclass.loadCompletedHistory(gedaanIds, function(){
                callback(thisclass)
            });

        });
        
    }

    loadCompletedHistory(completedIds, callback) {
        this.completedHistory = [];
        var thisclass = this;
        if (completedIds.length > 0) {
            completedIds.forEach(row => {
                DB_getGedaanById(row.id, function(data) {
                    new Completed(data, function(newCompleted){
                        thisclass.addCompletedToHistory(newCompleted)
                        if (thisclass.completedHistory.length == completedIds.length) {
                            callback()
                        }
                    });
                })
            });
        } else {
            callback();
        }
    }

    /**
     * 
     * @param {completedObject} Completed 
     */
    addCompletedToHistory(Completed) {
        this.completedHistory.push(Completed);
        this.completedHistory.sort(function(a,b){return (new Date(a.getDate()) - new Date(b.getDate()))})
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
        var ans = null;
        this.getAllPeople().forEach(person => {
            if (person.getId() == person_id) {
                ans =  person;
            }
        });
        return ans;
    }

    static createPerson(person_data, callback) {
        var thisclass = this;
        var newPerson = new Person(person_data, function(){
            thisclass.person_list.push(newPerson)
            callback(newPerson);
        });
    }

    static setPeopleAsInDatabase(callback) {
        this.clearPersonList();
        var thisclass = this;
        DB_getPersoonIds( function(data){
            if (data.length > 0) {
                data.forEach(row => {   
                    DB_getPersonById(row.id, function(data2){
                        Person.createPerson(data2, function(){  
                            if(Person.getAllPeople().length == data.length) {
                                callback();
                            }
                        })
                    });
                });
            } else {
                callback();
            }
        });
    }

}