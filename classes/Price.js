class Price{

    constructor(data) {
        this.id = data.id;
        this.amount = data.amount;
        this.date = data.date;
        this.task_id = data.task_id;
    }

    getAmount() {
        return this.amount;
    }

    getDate() {
        return this.date;
    }
}