function makeTasksWebsite(tasks){
    var maintable = document.createElement('table');
    document.body.appendChild(maintable);
    tasks.forEach(task => {
        var row  = maintable.insertRow(-1);
        row.id = task.id;
        updateTask(task, row)
        console.log(row);
    });
    
}

function makeLeaderBoardWebsite(people){
    var title = document.createElement('h3');
    var slider = document.createElement('marquee');
    slider.id = 'slider';
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