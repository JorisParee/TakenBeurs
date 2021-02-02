function displayTasks(tasks, tabel) {
    var tabel = document.getElementById('');
    var counter = 0;
    tasks.forEach(task => {
        if (counter % 2 == 0) {
            var row = tabel.insterRow();
        }
        createRadioButton(task.getName(), task.getId(),'taak', row);
        counter++;
    });
}

function createRadioButton(naam, id, name, rij){
    var rij = document.getElementById(rij);
    var cell = tabel.insertCell(-1);
    var radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = name;
    radio.id = id;

    var label = document.createElement('label');
    label.htmlFor(id);

    var description = document.createTextNode(naam);
    label.appendChild(description);
    
    cell.appendChild(radio);
    cell.appendChild(label);
   
}