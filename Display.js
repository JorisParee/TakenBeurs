function displayTasks(tasks, tabel) {
    var tabel = document.getElementById(tabel);
    tabel.innerHTML = "";
    var counter = 0;
    var row;
    tasks.forEach(task => {
        if (counter % 2 == 0) {
            row = tabel.insertRow(-1);
        }
        createRadioButton(task.getName(), task.getId(),'Taakbutton', row);
        counter++;
    });
}

function displaySpecials(specials, tabel){
    var tabel = document.getElementById(tabel);
    tabel.innerHTML = "";
    var counter = 0;
    var row;
    specials.forEach(special => {
        if (counter % 2 == 0) {
            row = tabel.insertRow(-1);
        }
        createRadioButton(special.getName(), special.getId(),'Taakbutton', row);
        counter++;
    });
}

function displayPeople(people, tabel){
    var tabel = document.getElementById(tabel);
    tabel.innerHTML = "";
    var counter = 0;
    var row;
    people.forEach(person => {
        if (counter % 2 == 0) {
            row = tabel.insertRow(-1);
        }
        createRadioButton(person.getName(), person.getId(),'Personbutton', row);
        counter++;
    });
}

function createRadioButton(naam, id, name, rij){
    var cell = rij.insertCell(-1);
    var radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = name;
    radio.id = id;

    var label = document.createElement('label');
    label.htmlFor = id;

    var description = document.createTextNode(naam);
    label.appendChild(description);
    
    cell.appendChild(radio);
    cell.appendChild(label);
   
}

function displaySlideTasks(tasks){
    var marquee = document.getElementById('sliderlayout');
    marquee.innerHTML = '';
    let s = "";
    tasks.forEach(task => {
        marquee.innerHTML += s + String(task.getName()) + ": \u20AC" + String(task.getCurrentPrice());
        s = ", ";
    })
}

function displaySlideSpecials(specials){
    var marquee = document.getElementById('sliderlayout2');
    marquee.innerHTML = '';
    let s = "";
    specials.forEach(special => {
        marquee.innerHTML += s + String(special.name);
        s = ", ";
    })
}

function displaySlidePeople(people){
    var marquee = document.getElementById('sliderlayout3');
    marquee.innerHTML = '';
    let s = "";
    people.forEach(person => {
        marquee.innerHTML += s + String(person.getName()) + ": \u20AC" + String(person.getBalance());
        s = ", ";
    })
}
