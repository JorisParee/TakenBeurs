class Person{
    
    /**
     * person_id must be a valid person in the database
     * initializes this person
     * @param {id} person_id 
     */
    constructor(id) {//will be data later on
        /*
        var obj = JSON.parse(data)
        this.id = obj.id
        this.name = obj.name
        this.balance = 0;
        */
       this.id = id;
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
    setBalance(){
        this.balance = 0;
        DB_getGedaanIdsByUserId(this.id, function(data){
            var obj = JSON.parse(data);
            DB_getPriceById(obj.priceid, function(data){
                var object = JSON.parse(data)
                this.balance += object.price
            })
        })
    }

    static load(id){
        DB_getPersonByID(id, function(data){
            new Person(data)
        })
    }


}