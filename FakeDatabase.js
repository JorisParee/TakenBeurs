//create all tables as arrays with the id the index and in there the values as new array

var taak = [];//[naam, beschrijving]
var prijs = [];//[task_id, prijs, datum]
var gedaan = [];//[persoon_id, prijs_id];
var persoon = [];//[naam]

var special = [];//[naam, begindata, eintdata, prijs] not yet active


function initializeData() {
    DB_addTaak("wc", "maak de wc schoon, doe dwielen, doe de pot schoon, voeg wcding toe");//id 0
    DB_addTaak("keuken", "maak de wc schoon, doe dwielen, doe de aanrecht");//id 1

    DB_addPrijs(0, 4.20, new Date(2021, 1, 20, 16, 21, 0));//id 0
    DB_addPrijs(0, 5.0, new Datum(2021, 1, 23, 14, 0, 0));//id 1
    DB_addPrijs(0, 6.0, new Datum(2021, 1, 24, 14, 0, 0));//id 2
    DB_addPrijs(0, 5.0, new Datum(2021, 1, 25, 14, 0, 0));//id 3

    DB_addPrijs(1, 200, new Datum(2021, 2, 1, 19, 0, 0));//id 4

    DB_addGedaan(0, 2);//id 0

    DB_addPersoon("Joris");//id 0
    DB_addPersoon("Job");//id 1
    DB_addPersoon("joris II");//id 2

}

function DB_addTaak(naam, beschrijving) {
    var row = [naam, beschrijving];
    taak.push(row);
}

function DB_addPrijs(taak_id, varprijs, datum) {
    var row = [taak_id, varprijs, datum];
    prijs.push(row);
}

function DB_addGedaan(persoon_id, prijs_id) {
    var row = [persoon_id, prijs_id];
    gedaan.push(row);
}

function DB_addPersoon(naam) {
    var row = [naam];
    persoon.push(row);
}



