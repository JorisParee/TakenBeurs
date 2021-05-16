//this will be a site where we show the prices for tasks done 
// this will increase and decrease as if it were a stock for each task
var people = [];
var tasks = [];
//var specials = [];//for later upgrades

function initializePeople(){
    DB_getPersoonIds( function(data){
        data.forEach(row => {
            DB_getPersonById(row.id, function(data2){
                let newPerson = new Person(data2);
                people.push(newPerson);
            });
        });
    });
}  

function initializeTasks(){
    DB_getTaakIds( function(data) {
        data.forEach(row => {
            DB_getTaakById(row.id, function(data2){
                let newTask = new NormalTask(data2);
                tasks.push(newTask);
            })
        })
    })  
} 

initializeTasks();
initializePeople();


makeBasicWebsite(tasks, people);



