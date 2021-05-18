function createParagrah(text) {
     var node = document.createElement("p");
     var txtnode = document.createTextNode(text);
     node.appendChild(txtnode);
     return node
}

function createHeader(text) {
    var node = document.createElement("h1");
    var txtnode = document.createTextNode(text);
    node.appendChild(txtnode);
    return node;
}

function createTable() {
    return document.createElement("table");
}

function createTaskInfoDiv(task) {
    var node = document.createElement("div");
    var priceParagraph = createParagrah("Prijs: " + task.getCurrentPrice());
    node.appendChild(priceParagraph);
    node.appendChild(document.createElement("br"))
    var dateParagraph = createParagrah("Laatst gedaan: " + task.getLastCompletedDate());
    node.appendChild(dateParagraph);
    return node;
}

function createTaskOverview(tasks) {
    var table = createTable();
    tasks.forEach(task => {
        var row = table.insertRow(-1);
        var taskname = row.insertCell(-1);
        taskname.appendChild(createHeader(task.getName()));
        var taskinfo = row.insertCell(-1);
        taskinfo.appendChild(createTaskInfoDiv(task));


    });
    return table;
}

function makeSite(tasks, users) {
    document.body.appendChild(createTaskOverview(tasks))
}