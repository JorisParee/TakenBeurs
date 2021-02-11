function makeTasksWebsite(tasks){
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
        cell3.appendChild(createButton("Doe Taak!", "Task"+ task.id+"but", {}));
    });
    
}

function makeLeaderBoardWebsite(people){
    var title = document.createElement('h3');
    var slider = document.createElement('marquee');
    slider.className = 'sliderlayout';
    slider.innerHTML = '';
    s = "";
    people.forEach(person => {
        slider.innerHTML += s + String(person.name) + ": \u20AC" + String(person.getBalance());
        s = ", ";
    })
    title.innerText = 'Leaderboard';
    document.body.appendChild(title);
    document.body.appendChild(slider);
}

function makeBasicWebsite(tasks, people){
    makeTasksWebsite(tasks);
    addEnter(document.body);
    addEnter(document.body);
    addEnter(document.body);
    makeLeaderBoardWebsite(people);
}