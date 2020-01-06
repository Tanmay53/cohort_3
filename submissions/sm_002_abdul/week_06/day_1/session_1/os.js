
var submit=document.getElementById('submit'); //first we fetch the submit button

submit.addEventListener('click',function (){ //'click' event listener is added to it which initiates function and get and display data
    
    var osInput=document.getElementById('os').value; //get the input value
    getUserData(printUserData,osInput); //wrote a callback fn printUserData as arguement inside getUserData function
})

//getUserData function gets the data from the server/URL to the local machine

//printUserData function displays the data

function getUserData(displayFunction,osInput){ //here displayFunction parameter is a function
    var result=null;    //var result is declared null
    var xhr=new XMLHttpRequest(); //new constructor xhr object is created
    xhr.open('GET','http://localhost:8080/codenames/'+osInput); //using get method to get data from URL. input from our end is also
    //given to get the data we neeed. 
    xhr.send(); //this will send the request to the server
    xhr.onload = function () { // this fn is invoked after info is retrieved
        if (xhr.status == 200){
            result = JSON.parse(xhr.response); //if we get an OK response from server. .we get this xhr.response as data from server
            displayFunction(result);
        }
        else{
            console.log("Error code is :"+xhr.status)// else we can check the exact type of error with xhr.status
        }
    }
}

var printUserData= function (input){
    var body=document.querySelector('body'); //first we fetch the body
    var table=document.createElement('table'); //table is created
    table.textContent='' // to remove previous data from displaying we set it to empty
    var osNameDisplay=document.createElement('p'); // para is created

    var firstRow=document.createElement('tr'); // table-row is created
    var firstLabel=document.createElement('td'); //table data is create 
    var secondLabel=document.createElement('td'); //table data is created
    firstLabel.textContent='Version'; // version number is written in first col
    secondLabel.textContent='Name'; // version name is written in second col
    firstRow.appendChild(firstLabel); // these two col are appended to table-row
    firstRow.appendChild(secondLabel);
    table.appendChild(firstRow); //that table-row is appended to table

    osNameDisplay.textContent=input['os']; // to display name of OS we retrieved from server
    body.appendChild(osNameDisplay)
    


    if (input == null){
        osNameDisplay.textContent= 'Error! No user data received or invalid request!' //error message
    }
    else{
        for (var i=0;i<input['codenames'].length;i++){ //we iterate through the array of version names and numbers 
            var row=document.createElement('tr'); //table is created
            var firstCol=document.createElement('td'); // /table data is created
            var secondCol=document.createElement('td');
            firstCol.textContent=input['codenames'][i]['version']; //appended that version number to table row
            secondCol.textContent=input['codenames'][i]['name']; //appended that version name to table row
            row.appendChild(firstCol); //appended those col to row
            row.appendChild(secondCol);
            table.appendChild(row); //and finally append that row to table
        }
    }
    body.appendChild(table); //table is then appended to body
}
