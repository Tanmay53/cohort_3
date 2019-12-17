$("#outputContainer").hide();
$("#getDetail").click(function(){
    var name = $("#name").val();

    var link = "https://indreed.herokuapp.com/api/jobs/?q="+name
    $.ajax({
        url: link,
    })
    .done (function(data){
        // var data = JSON.parse(result)
        printApiDetails(data);
    })
})

function printApiDetails (data){
    $("#table").empty();
    $("#outputContainer").show();
    console.log(data)
    $("#page1").click(function(){
        $("#table").empty();
        for(var i = 0; i < data.length/2; i++){
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            var td4 = document.createElement('td');
    
            td1.innerHTML=data[i]["id"];
            td2.innerHTML=data[i]["company"];
            td3.innerHTML=data[i]["location"];
            td4.innerHTML=data[i]["title"];
           
            $(tr).append(td1,td2,td3,td4);
            $("#table").append(tr);
        }
    })
    $("#page2").click(function(){
        $("#table").empty();
        for(var i = data.length/2; i < data.length; i++){
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            var td4 = document.createElement('td');
    
            td1.innerHTML=data[i]["id"];
            td2.innerHTML=data[i]["company"];
            td3.innerHTML=data[i]["location"];
            td4.innerHTML=data[i]["title"];
           
            $(tr).append(td1,td2,td3,td4);
            $("#table").append(tr);
        }
    })
    
}
