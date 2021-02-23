function createButton(name, id, list){
    var button = document.createElement("input");
    button.type = "submit";
    button.value = name;
    button.id = id;
    button.className = 'defaultBut';
    if(list['class']){
        button.className = list['class'];
    }
    return button;
}

function createRadioButton(naam, id, name){ //Zou chill zijn als we iets kunne verzinnen voor een betere output.
    var radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = name;
    radio.id = id;

    var label = document.createElement('label');
    label.htmlFor = id;

    var description = document.createTextNode(naam);
    label.appendChild(description);
    
    return [radio, label];
}

function createGraph(id, points, labels){
    var ctx = document.getElementById(id).getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: labels,
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: points,
            fill:false,
            lineTension: 0
        }]
    },

    // Configuration options go here
    options: {}
});
}

function createGraphByTask(task){
    var priceHistory = task.getPriceHistory();
    var prices = [];
    var dates = [];
    for(i = 0; i < priceHistory.length; i++){
        prices.push(priceHistory[i][0]);
        dates.push(dateToString(priceHistory[i][1]));
    }

    createGraph("task" + String(task.id), prices, dates)
}

function createInfo(task){
    var price = task.getCurrentPrice();
    var lastDate = task.getLastDate();
    var p = document.createElement('p');
    p.innerText = "\u20AC"+price;
    var p2 = document.createElement('p');
    p2.innerText = dateToString(lastDate);

    return [p,p2]
}

function createCanvas(id, role, aria){
    var canvas = document.createElement('canvas');
    canvas.setAttribute("id", id);
    canvas.setAttribute("role", role);
    canvas.setAttribute("aria-label", aria)
    return canvas;
}

function dateToString(date){
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    return String(day) + "-" + String(month+1) + "-" + String(year)
}

function addEnter(htmlelement){
    var p = document.createElement('p');
    p.innerText = "\n";
    htmlelement.appendChild(p);
}

function makeModal(modalid, id, description){
    var modal = document.createElement('div');
    modal.id = modalid;
    modal.className = 'modal';
    var modalcontent = makeModalContent(modalid, id, description);
    
    modal.appendChild(modalcontent);
    document.body.appendChild(modal);
    
}

function makeSpan(className, id){
    var span = document.createElement('span');
    span.className = className;
    span.id = id;
    span.innerHTML = '&times;';
    return span;
}

function makeModalContent(modalid, task_id, description){
    var modalcontent = document.createElement('div');
    modalcontent.className = 'modal-content';
    modalcontent.appendChild(makeSpan('close', modalid + 'span'));
    var tabel = document.createElement('table');
    var counter = 0;
    var row;
    people.forEach(person => {
        if(counter % 3 == 0){
            row = tabel.insertRow(-1);
        }
        var cell = row.insertCell(-1);
        cell.appendChild(createRadioButton(person.getName(),person.getId(), 'Personbut')[0]);
        cell.appendChild(createRadioButton(person.getName(),person.getId(), 'Personbut')[1]);
        counter ++;
    })
    modalcontent.appendChild(tabel);
    var p = document.createElement('p');
    p.innerText = description;
    modalcontent.appendChild(p);
    var button = createButton('Helemaal klaar Joh','modalBut', {'class':'redBut'});
    modalcontent.appendChild(button);
    button.onclick = function(){
        modalClick(task_id);    
    }
    return modalcontent;    
}

function modalClick(taskid){
    var task = tasks[taskid];
    var prijsid = DB_addPrijs(task.id, task.getCurrentPrice(), new Date());
    task.setTaskDone(new Date());
    var radio = document.getElementsByName('Personbut');
    var person;
    radio.forEach(but =>{
        if(but.checked){
            person = but.id;
        }
    });
    DB_addGedaan(person.id, prijsid);
}