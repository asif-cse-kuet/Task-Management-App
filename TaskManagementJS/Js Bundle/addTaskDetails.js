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

    }

}