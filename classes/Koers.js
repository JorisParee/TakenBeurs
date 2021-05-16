

function Koers_newPriceForTaskDone(task){
    return task.getCurrentPrice() * 0.8;
}

function Koers_newPriceForTask(task){
    return task.getCurrentPrice() * 1.05;
}