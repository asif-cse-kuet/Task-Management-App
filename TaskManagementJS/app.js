//import { formReset } from './formReset.js';
//var formReset = require('./formReset');

const success = "<p class='submitsuccess'>Successfully Added</p>";
const reset = "<button id='addmore' class='submit'>Add More</button>";


let btn = document.getElementById('submit');
console.dir(btn);

let ev = {num: 2};
btn.onclick = function(event){
    formReset();
    addTaskDetails(ev);
    formClear();
    event.preventDefault();
}

function formReset() {
    let tl = document.getElementById('title').value;
    let dl = document.getElementById('details').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    let priority = document.getElementById('priority').value;

    if (((tl=='') || (dl=='')|| (date=='')|| (time=='')|| (priority==''))) {
        window.alert("Please fill out all required fields");
    }

    else{

        console.log('Task is completed');

        //Reseting button after submitting
        let rset = document.createElement('div');
        rset.innerHTML = reset;

        //Submition Successfull Message
        let h = document.createElement('p');
        h.innerHTML = success;

        //Hide the Task details form element
        document.getElementById('hide').hidden = true;
        btn.hidden=true;

        //Creating Success and Reset Child 
        document.getElementById('taskdiv').appendChild(h);
        document.getElementById('taskdiv').appendChild(rset);
        

        //Reset Child OnClick Function
        rset.onclick = function(){
            document.getElementById('hide').hidden = false;
            rset.hidden = true;
            btn.hidden = false;
            h.hidden = true;
        }

        
    }

}

function addTaskDetails(ev){

    //Fetching Form Element and Data
    let tl = document.getElementById('title').value;
    let dl = document.getElementById('details').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    let priority = document.getElementById('priority').value;

    //console.log(tl, dl, time, date, priority);
    //Storing table data as HTML
    //let tabledata = "<td>tl</td><td>dl</td><td>date</td><td>time</td><td>priority</td>";


    //Checking purpose writter code
    // console.log(((ev.num)%2)==0);
    // ev.num++;
    // console.log(ev.num);




    //Checking if any input item is empty or not
    if (((tl=='') || (dl=='')|| (date=='')|| (time=='')|| (priority==''))) {
        //window.alert("Please fill out all required fields");
    }

    else if((((ev.num)%2)==0)){
        ev.num++;
        console.log(ev.num);
        console.log('Checking');
        //Creating row in table
        let table = document.getElementById('table');
        let row = document.createElement('tr');
        // row.innerHTML = tl;
        table.appendChild(row);

        let col = document.createElement('td');
        col.innerText = tl;
        row.appendChild(col);
        col.classList.add('tb2');

        col = document.createElement('td');
        col.innerText = dl;
        row.appendChild(col);
        col.classList.add('tb22');

        col = document.createElement('td');
        col.innerText = date;
        row.appendChild(col);
        col.classList.add('tb2');

        col = document.createElement('td');
        col.innerText = time;
        row.appendChild(col);
        col.classList.add('tb22');

        col = document.createElement('td');
        col.innerText = priority;
        row.appendChild(col);
        col.classList.add('tb2');


        //Deleting Item
        col = document.createElement('td');
        row.appendChild(col);
        let btnn = document.createElement('button');
        btnn.innerText ='Delete';
        col.appendChild(btnn);
        col.setAttribute('id', 'delete');
        console.log(col.id);
        col.classList.add('tb22');
        btnn.setAttribute('style', 'color:white; border-radius:8px');
    }


    else{
        ev.num++;
        //Creating row in table
        let table = document.getElementById('table');
        let row = document.createElement('tr');
        // row.innerHTML = tl;
        table.appendChild(row);

        let col = document.createElement('td');
        col.innerText = tl;
        row.appendChild(col);
        col.classList.add('tb1');

        col = document.createElement('td');
        col.innerText = dl;
        row.appendChild(col);
        col.classList.add('tb11');

        col = document.createElement('td');
        col.innerText = date;
        row.appendChild(col);
        col.classList.add('tb1');

        col = document.createElement('td');
        col.innerText = time;
        row.appendChild(col);
        col.classList.add('tb11');

        col = document.createElement('td');
        col.innerText = priority;
        row.appendChild(col);
        col.classList.add('tb1');
        

        //Deleting item
        col = document.createElement('td');
        row.appendChild(col);
        let btnn = document.createElement('button');
        btnn.innerText ='Delete';
        col.appendChild(btnn);
        col.setAttribute('id', 'delete');
        col.classList.add('tb11');
        console.log(col.id);
        btnn.setAttribute('style', 'color:white; border-radius:8px');

    }

}


function formClear(){
    document.getElementById('title').value = '';
    document.getElementById('details').value = '';
    document.getElementById('date').value = '';
    document.getElementById('time').value = '';
    document.getElementById('priority').value = '';
}


