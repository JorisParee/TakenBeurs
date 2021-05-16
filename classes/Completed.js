class Completed{

    constructor(data) {
        this.id = data.id;
        this.date = data.date;
        DB_getPrijsById(data.price_id, function(data2){
            this.price = new Price(data2);
        })
    }

    getDate(){
        return this.date;
    }

    getPrice() {
        return this.price;
    }
}