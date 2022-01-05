//this will be a site where we show the prices for tasks done 
// this will increase and decrease as if it were a stock for each task


function initialize(callback){
    Person.setPeopleAsInDatabase(function(){
        NormalTask.setTasksAsInDatabase( function() {
            callback();//setup has finished
        })
    })
} 






