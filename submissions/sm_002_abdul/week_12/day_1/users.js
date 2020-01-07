var printDataBtn=document.querySelector('#printUserData');

printDataBtn.addEventListener('click',getData(printData));

function getData(printTable){

    var xhr=new XMLHttpRequest();

    xhr.open('GET', 'https://reqres.in/api/users?page=1');
    xhr.send()
    xhr.onload = function (){
        if(xhr.status == 200){
            printTable(xhr.response);
        }
    else{
      console.log("Error Code is:" + xhr.status);
    }
  } 
}
function printData(input){
    var body=document.querySelector('body');
    var details=JSON.parse(input);
    var table=document.createElement('table');

    for (var i=0;i<details['data'].length;i++){
        var row=document.createElement('tr');
        var td1=document.createElement('td');
        var td2=document.createElement('td');
        var td3=document.createElement('td');
        var td4=document.createElement('td');

        td1.textContent=details['data'][i]['id'];
        td2.textContent=details['data'][i]['email'];
        td3.textContent=details['data'][i]['first_name'];
        td4.textContent=details['data'][i]['last_name'];

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        table.appendChild(row);
    }

    body.appendChild(table);

    $('table').addClass('table');
}