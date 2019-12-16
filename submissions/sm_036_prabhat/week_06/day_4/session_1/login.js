$("#outputContainer").hide();
$("#getDetail").click(function(){
    var obj = {
        password : $("#password").val(),
        username : $("#username").val(),
    }
    var objData = JSON.stringify(obj)
    // console.log(objData);
    var link = "http://localhost:8080/auth/login"
    $.ajax({
        method: "POST",
        url: link,
        data: objData,
        beforeSend: function(xhr) {
            xhr.setRequestHeader( "Content-type","application/json; charset=utf-8" );
        }
    })
    .done (function(result){
        // console.log(result);
        var token = JSON.parse(result).token;
        getApiDetail(token,obj.username)
    })
})

function getApiDetail(token, username){

    var link = "http://localhost:8080/user/"+username
    $.ajax({
        url : link,
        beforeSend: function(xhr) {
            xhr.setRequestHeader( "Authorization","Bearer "+ token);
        }
    })
    .done (function(res){
        var printData = JSON.parse(res);
        console.log(printData);
        printApiDetails(printData);
    })
}
function printApiDetails (printData){
    $("#outputContainer").show();
    $("#td1").html(printData.name);
    $("#td2").html(printData.username);
    $("#td3").html(printData.email);
    $("#td4").html(printData.mobile);
    $("#td5").html(printData.description);
    $("#td6").html(printData.token)

}