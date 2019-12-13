$("#getDetail").click(function(){
    var obj = {
        name : $("#name").val(),
        email : $("#email").val(),
        password : $("#password").val(),
        username : $("#username").val(),
        mobile : $("#mobile").val(),
        description : $("#description").val(),
    }
    var objData = JSON.stringify(obj)
    console.log(objData);
    var link = "http://localhost:8080/auth/register"
    $.ajax({
        method: "POST",
        url: link,
        data: objData,
        beforeSend: function( xhr ) {
            xhr.setRequestHeader( "Content-type","application/json; charset=utf-8" );
        }
    })
    .done (function(result){
        console.log(result)
        var message = JSON.parse(result);
        $("#messageDisplay").html(message.message)
    })
})