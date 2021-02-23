//create all tables as arrays with the id the index and in there the values as new array

// var taak = [];//[naam, beschrijving]
// var prijs = [];//[task_id, prijs, datum]
// var gedaan = [];//[persoon_id, prijs_id];
// var persoon = [];//[naam]
// 
// var special = [];//[naam, begindata, eintdata, prijs] not yet active

initializeData();
function initializeData() {


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

    
}

/**
 * creates an new intsnce of gedaan to the database.
 * 
 * @param {int} persoon_id must be a valid personid
 * @param {int} prijs_id must be a valid prijsid
 * @post this instance is added to the database
 */
function DB_addGedaan(persoon_id, prijs_id) {

    
}

/**
 * creates an instance of persoon and adds it to the database
 * 
 * @param {string} naam 
 * @post this instance is in the database
 */
function DB_addPersoon(naam) {
    var data = new URLSearchParams();
    data.append('name', naam);

    var succesfull = false;

    fetch("/sql_addUser.php", {
        method: 'post',
        body: data
    })
    .then(function (response) {
        return response.text();
    })
    .then(function (text) {
        if (text.startsWith("succesfull")) {
            succesfull = true;
        } else {
            console.log(text);
        }
    })
    .catch( function (error) {
        console.log(error);
    })

    return succesfull;
    
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

}



//get functions for the ids in the databases

/**
 * returns all id's of the existing taaken in the database
 */
function DB_getTaakIds() {

    
}

/**
 * returns all id's of the existing prijszen in the database
 */
function DB_getprijsIds() {

    
}

/**
 * returns all id's of the existing gedaan in the database
 */
function DB_getGedaanIds() {

    
}

/**
 * returns all id's of the existing taaken in the database
 */
function DB_getPersoonIds() {

    
}



// functions for specific thins with calculatiokns

/**
 * returns the prices form this task as an array with prices and dates
 * 
 * @param {int} id beign a valid task id in the database
 * @return a list with in it [price, date]. 
 * TODO order it so it always has oldest date first and newest last.
 */
function DB_getPriceHistoryByTaskId(id) {

    
}

/**
 * returns the name of this task
 * 
 * @param {int} id must be a valid id in the database
 */
function DB_getTaskNameById(id) {

    
}

/**
 * return the last date this task was executed
 * 
 * @param {int} id 
 * returns date as Date with year, month, day, hour, minute, second
 * this is the last time this task was done by anyone.
 */
function DB_getLastDateDoneFromTaskById(id) {

    
}



/**
 * returns the name of this person
 * @param {int} id must be a valid id in the database
 */
function DB_getPersonNameById(id) {

}

