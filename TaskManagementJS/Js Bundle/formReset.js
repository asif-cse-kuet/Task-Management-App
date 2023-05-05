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
