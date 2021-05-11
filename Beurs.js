//this will be a site where we show the prices for tasks done 
// this will increase and decrease as if it were a stock for each task
var people = [];
var tasks = [];
var specials = [];

function initializePeople(){
    people = [];
    var arr = DB_getPersoonIds();
    for(var i = 0; i < arr.length; i++){
        var someone = DB_getPersonById(i);
        var person = new Person(i);
        person.name = someone[0];
        people.push(person);
    }
}  

function initializeTasks(){
    for(var i = 0; i < 6; i++){
        var taak = task.load(i);
        tasks.push(taak);
    }
    
} 

initializeTasks();
initializePeople();


makeBasicWebsite(tasks, people);



