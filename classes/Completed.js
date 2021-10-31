class Completed{

    constructor(data, callback) {
        this.id = data.id;
        this.user_id = data.user_id;
        this.price_id = data.price_id
        var thisclass = this;
        DB_getPrijsById(this.price_id, function(data2){
            thisclass.price = new Price(data2);
            callback(this);
        })
    }

    getDate(){
        return this.getPrice().getDate()
    }

    getAmount(){
        return this.getPrice().getAmount();
    }

    getPrice() {
        return this.price;
    }


}