$("#tableDisplay").hide()
$("#getDetail").click(function(){
    var osCode = $("#opt").val();
    console.log(osCode)
    var urlOs = "http://localhost:8080/codenames/"+osCode
    $.ajax({
        url : urlOs
    }).done(function(data){
        console.log(data);
        var data = JSON.parse(data)
        show(data);
    })
    $("#table").empty();
});

function show(data){
    $("#osName").html(data["os"]);
    $("#tableDisplay").show()
    for(var i = 0; i < data["codenames"].length; i++){
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        td1.innerHTML=data["codenames"][i]["name"];
        td2.innerHTML=data["codenames"][i]["version"]
        $(tr).append(td1,td2);
        $("#table").append(tr);
    }
}