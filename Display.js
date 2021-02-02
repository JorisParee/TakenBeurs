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