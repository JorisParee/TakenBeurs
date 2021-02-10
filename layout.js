function makeBasicWebsite(tasks){
    console.log(tasks);
    var maintable = document.createElement('table');
    document.body.appendChild(maintable);
    var row;
    tasks.forEach(task => {
        row = maintable.insertRow(-1);
        cell = row.insertCell(-1);
        cell.appendChild(createCanvas("task" + String(task.id), "img", "aria"+String(task.name)));
        createGraphByTask(task);
        cell2 = row.insertCell(-1);
        cell2.appendChild(createInfo(task)[0])
        cell2.appendChild(createInfo(task)[1])
        cell3 = row.insertCell(-1);
        cell3.appendChild(createButton("Doe Taak!", {}));
    });
    
}