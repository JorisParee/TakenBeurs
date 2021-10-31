class Completed{

   /**
    * data must exist of id, user_id and price_id.    
    * @param {database data} data data to initialize the completed object with
    * @param {function(completedObject)} callback a callback that returns the completed object
    */
    constructor(data, callback) {
        this.id = data.id;
        this.user_id = data.user_id;
        this.price_id = data.price_id
        var thisclass = this;
        DB_getPrijsById(this.price_id, function(data2){
            var priceObject = new Price(data2);
            thisclass.price = priceObject
            callback(thisclass);
        })
    }

    getDate(){
        return this.getPrice().getDate()
    }

    getAmount(){
        return this.getPrice().getAmount();
    }

    getUserId(){
        return this.user_id()
    }

    getPrice() {
        return this.price;
    }


}