/**
 * 
 */

 function sendData() {

    /* test variables */
    var name1 = "Rory";
    var balance1 = 10;
    var taskHistory1 = "windows"
    var name2 = "Joris";
    var balance2 = 30;
    var taskHistory2 = "kitchen"

    var taskName = "test task";
    var currentPrice = 30;
    var taskDone = true;
    var specialsName = "WC";
    var specialsPrice = 10;
    var specialsEindtijd = "18:00";
/*  ****************************  */

    var obj = new Object();
    obj.person = [[name1, [balance1, taskHistory1]], [name2, [balance2, taskHistory2]]];
    obj.task = taskName, [currentPrice, taskDone];
    obj.specials = [specialsName, specialsPrice, specialsEindtijd];
    var jsonString= JSON.stringify(obj);

    return jsonString;
}