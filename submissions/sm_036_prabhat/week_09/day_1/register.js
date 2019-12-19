$("#outputContainer").hide();
function sendPost(obj) {
    var xhr = new XMLHttpRequest();
    objData = JSON.stringify(obj);
    xhr.open("POST",'https://reqres.in/api/register')
    xhr.setRequestHeader("Content-type","application/json; charset=utf-8");
    xhr.send(objData);
    xhr.addEventListener("load",function(){
        if(xhr.status <= 400){
            var result = JSON.parse(xhr.response)
            printApiDetails (result)
        }
        else{
            console.log("Error Code is: "+ xhr.status)
        }
    });
    xhr.addEventListener('error',function(event){
        console.log("Error in HTTP request!")
    });
}

function printApiDetails (result){
    $("#inputForm").hide();
    $("#outputContainer").show();
    $("#dataDis").html(result.token);
}

function getDetail(){
    var obj = {
        email : $("#email").val(),
        password : $("#password").val(),
    }
    console.log(obj)
    sendPost(obj)
}