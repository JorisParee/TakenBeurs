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

//add functions

/**
 * voeg een taak toe aan de database
 * 
 * @param {string} naam 
 * @param {string} beschrijving 
 * @post deze taak met naam en beschrijving staan nu in de database;
 */
function DB_addTaak(naam, beschrijving) {
    var row = [naam, beschrijving];
    taak.push(row);
}

/**
 * creates a new instance of prijs to the database
 * 
 * @param {int} taak_id must be a valid task id
 * @param {number} varprijs a number, may be decimal, in euro's
 * @param {Date} datum a date, must have year, month, day, hour, minute, second.
 * @post this instance is added to the database
 */
function DB_addPrijs(taak_id, varprijs, datum) {
    var row = [taak_id, varprijs, datum];
    prijs.push(row);
}

/**
 * creates an new intsnce of gedaan to the database.
 * 
 * @param {int} persoon_id must be a valid personid
 * @param {int} prijs_id must be a valid prijsid
 * @post this instance is added to the database
 */
function DB_addGedaan(persoon_id, prijs_id) {
    var row = [persoon_id, prijs_id];
    gedaan.push(row);
}

/**
 * creates an instance of persoon and adds it to the database
 * 
 * @param {string} naam 
 * @post this instance is in the database
 */
function DB_addPersoon(naam) {
    var row = [naam];
    persoon.push(row);
}


// get functions
//by ids

/**
 * returns the task associated to this id
 * 
 * @param {int} id valid id of taak in database
 * @throws if id is not in database returns false;
 * 
 * @returns the task with this id as list [naam, beschrijving]
 */
function DB_getTaakById(id) {
    return taak[id]
}

/**
 * returns the prijs associated to this id
 * 
 * @param {id} id 
 * @throws if id is not in database returns false;
 * 
 * @returns the prijs with this id as a list [taskid, prijs, datum];
 */
function DB_getPrijsById(id) {
    return prijs[id]
}

/**
 * returns the gedaan associated to this id
 * 
 * @param {id} id 
 * @throws if id is not in database returns false;
 * 
 * @returns the gedaan with this id as a list [personid, prijsid];
 */
function DB_getGedaanById(id) {
    return gedaan[id]
}

/**
 * returns the persoon associated to this id
 * 
 * @param {id} id 
 * @throws if id is not in database returns false;
 * 
 * @returns the persoon with this id as a list [naam];
 */
function DB_getPersonById(id) {
    return persoon[id]
}







