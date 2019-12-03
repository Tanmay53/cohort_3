$(document).ready(function(){
    getUserData();
});

//getting users data through API GET request//
function getUserData(){
    var result = null;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/users?page=2");
    xhr.send();
    xhr.onload = function(){
        if(xhr.status == 200)
        {
            result = JSON.parse(xhr.response);
            printUserData(result);
            // console.log(result);
        }
        else
        {
            console.log("Error code is :" + xhr.status);
        }
    }
}

// printing fetched data to the table//
function printUserdata(input){
    var list = input.data
}