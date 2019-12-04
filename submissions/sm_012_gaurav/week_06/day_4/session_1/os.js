function createTable(objArr) {
    console.log(objArr.length);
    $('.col-6').empty();
    var table = document.createElement('table');
    $(table).addClass("table table-dark");
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    $(td1).text("Name");
    var td2 = document.createElement('td');
    $(td2).text("Version");
    $(tr).append(td1);
    $(tr).append(td2);
    $(table).append(tr);
    for (var i = 0; i < objArr.length; i++) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');        
        var td2 = document.createElement('td');
        $(td1).text(objArr[i]["name"]);
        $(td2).text(objArr[i]["version"]);
        $(tr).append(td1);
        $(tr).append(td2);
        $(table).append(tr);
    }
    $('.col-6').append(table);
}

$('#submitBtn').click(function() {
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/codenames/"+$('#osSelect').val()
    }).done(function(data) {
        data = JSON.parse(data);
        createTable(data["codenames"]);
    });
});

