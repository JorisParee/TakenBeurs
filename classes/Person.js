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

}