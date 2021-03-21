let name = 'selena';
console.log(name);


//getting items from form and display it



document.querySelector('#btn').addEventListener('click', function(e){
   e.preventDefault();
    let startTime = document.getElementById('startTime').value;
    let endTime = document.getElementById('endTime').value;
    let todo = document.getElementById('event').value;
    let r =  confirm(`ToDo: ${todo} From ${startTime} - ${endTime}`);
//    console.log("Start Time "+startTime);
//    console.log("End Time "+endTime);
//    console.log("Event "+ todo);
    if(r){
        let ntr = document.createElement('tr');
        let blankset = document.createElement('td');
        let timeset = document.createElement('td');
        let jobset= document.createElement('td');
        let timesetText = document.createTextNode(`${startTime} - ${endTime}`);
        let jobsetText = document.createTextNode(`${todo}`);
        timeset.appendChild(timesetText);
        jobset.appendChild(jobsetText);
        ntr.appendChild(blankset);
        ntr.appendChild(timeset);
        ntr.appendChild(jobset);
        
        document.querySelector('#outputTable').appendChild(ntr);
    }
   

});
