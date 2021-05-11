
//add functions

/**
 * voeg een taak toe aan de database
 * 
 * @param {string} naam 
 * @param {string} beschrijving 
 * @post deze taak met naam en beschrijving staan nu in de database;
 */
/*
function DB_addTaak(naam, beschrijving) {
    var data = new URLSearchParams();
    data.append("name", naam);
    data.append("beschrijving", beschrijving);

    fetch("/sql_addTask.php", {
        method: 'post',
        body: data
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        
    })
    .catch( function (error) {
        console.log(error);
    })
}
*/



/**
 * creates a new instance of prijs to the database
 * 
 * @param {int} taak_id must be a valid task id
 * @param {number} varprijs a number, may be decimal, in euro's
 * @param {Date} datum a date, must have year, month, day, hour, minute, second.
 * @post this instance is added to the database
 */
function DB_addPrijs(taak_id, prijs, datum) {
    var data = new URLSearchParams();
    data.append("taak_id", taak_id);
    data.append("prijs", prijs);
    data.append("datum", datum);

    fetch("/sql_addPrice.php", {
        method: 'post',
        body: data
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        
    })
    .catch( function (error) {
        console.log(error);
    })
    
}

/**
 * creates an new intsnce of gedaan to the database.
 * 
 * @param {int} persoon_id must be a valid personid
 * @param {int} prijs_id must be a valid prijsid
 * @post this instance is added to the database
 */
function DB_addGedaan(persoon_id, prijs_id) {
    var data = new URLSearchParams();
    data.append("persoon_id", persoon_id);
    data.append("prijs_id", prijs_id);

    fetch("/sql_addCompleted.php", {
        method: 'post',
        body: data
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        
    })
    .catch( function (error) {
        console.log(error);
    })
    
}

/**
 * creates an instance of persoon and adds it to the database
 * 
 * @param {string} naam 
 * @post this instance is in the database
 */
/*
function DB_addPersoon(naam) {
    var data = new URLSearchParams();
    data.append("name", naam);

    fetch("/sql_addUser.php", {
        method: 'post',
        body: data
    })
    .then(function (response) {
        return response.text();
    })
    .then(function (text) {
    })
    .catch( function (error) {
        console.log(error);
    })
    
}
*/


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
function DB_getTaakById(id, callback) {
    var data = new URLSearchParams();
    data.append("id", id);

    fetch("sql_db/sql_getTaskById.php", {
        method: 'post',
        body: data
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        callback(json);
    })
    .catch( function (error) {
        console.log(error);
    })
    
}

/**
 * returns the prijs associated to this id
 * 
 * @param {id} id 
 * @throws if id is not in database returns false;
 * 
 * @returns the prijs with this id as a list [taskid, prijs, datum];
 */
function DB_getPrijsById(id, callback) {
    var data = new URLSearchParams();
    data.append("id", id);

    fetch("/sql_addUser.php", {
        method: 'post',
        body: data
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        callback(json);
    })
    .catch( function (error) {
        console.log(error);
    })
    
}

/**
 * returns the gedaan associated to this id
 * 
 * @param {id} id 
 * @throws if id is not in database returns false;
 * 
 * @returns the gedaan with this id as a list [personid, prijsid];
 */
function DB_getGedaanById(id, callback) {
    var data = new URLSearchParams();
    data.append("id", id);

    fetch("/sql_addUser.php", {
        method: 'post',
        body: data
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        callback(json);
    })
    .catch( function (error) {
        console.log(error);
    })
    
}

/**
 * returns the persoon associated to this id
 * 
 * @param {id} id 
 * @throws if id is not in database returns false;
 * 
 * @returns the persoon with this id as a list [naam];
 */
function DB_getPersonById(id, callback) {
    var data = new URLSearchParams();
    data.append("id", id);

    fetch("/sql_addUser.php", {
        method: 'post',
        body: data
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        callback(json);
    })
    .catch( function (error) {
        console.log(error);
    })
}



//get functions for the ids in the databases

/**
 * returns all id's of the existing taaken in the database
 */
function DB_getTaakIds() {
    var data = new URLSearchParams();

    fetch("/sql_addUser.php", {
        method: 'post',
        body: data
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        callback(json);
    })
    .catch( function (error) {
        console.log(error);
    })
    
}

/**
 * returns all id's of the existing prijszen in the database
 */
function DB_getPrijsIdsByTaskId(id, callback) {
    var data = new URLSearchParams();
    data.append("id", id);

    fetch("/sql_addUser.php", {
        method: 'post',
        body: data
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        callback(json);
    })
    .catch( function (error) {
        console.log(error);
    })
    
}

/**
 * returns all id's of the existing gedaan in the database
 */
function DB_getGedaanIdsByTaskId(id, callback) {
    var data = new URLSearchParams();
    data.append("id", id);

    fetch("/sql_addUser.php", {
        method: 'post',
        body: data
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        callback(json);
    })
    .catch( function (error) {
        console.log(error);
    })
    
}

/**
 * returns all id's of the exitsting gedaans done by a specific person
 */
function DB_getGedaanIdsByUserId(id, callback) {
    var data = new URLSearchParams();
    data.append("id", id);

    fetch("/sql_addUser.php", {
        method: 'post',
        body: data
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        callback(json);
    })
    .catch( function (error) {
        console.log(error);
    })
}



/**
 * returns all id's of the existing taaken in the database
 */
function DB_getPersoonIds() {
    var data = new URLSearchParams();

    fetch("/sql_addUser.php", {
        method: 'post',
        body: data
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        callback(json);
    })
    .catch( function (error) {
        console.log(error);
    })
}


