//this will be a site where we show the prices for tasks done 
// this will increse and decrese as if it were a stock for each task
var people = [];
var tasks = [];
var specials = [];

function initializePeople(){
    people = [];
    var arr = DB_getPersoonIds();
    for(i = 0; i < arr.length; i++){
        var someone = DB_getPersonById(i);
        var person = new Person(i);
        person.name = someone[0];
        people.push(person);
    }
}  

function initializeTasks(){
    tasks = [];
    var arr = DB_getTaakIds();
    for(i = 0; i < arr.length; i++){
        var something = DB_getTaakById(i);
        var taak = new normalTask(i);
        taak.name = something[0];
        tasks.push(taak);
    }
} 

initializeTasks();
initializePeople();


makeBasicWebsite(tasks, people);

function taskDone(){

}


