  $(function() {
    $.ajax({
        url: "https://reqres.in/api/users?page=1",
      })
      .done(function(data) {
            var page = []; 
            page.push(data)
            displayData(data)
        });
});

$("#page-2-btn").click(function(){
    $.ajax({
      url: "https://reqres.in/api/users?page=2",
    })
    .done(function(data) {
        $('#tbody').empty();
        var page = []; 
        page.push(data)
        displayData(data)
    });
  });

$('#page-1-btn').click(function(){
    $('#tbody').empty();
    $.ajax({
        url: "https://reqres.in/api/users?page=1",
      })
      .done(function(data){
        var page = []; 
        page.push(data)
        displayData(data)
      })
});

var displayData = (function(data){
    var size = Object.values(Object.values((Object.values(data))[4])).length;
    console.log(size)
    for(var i=0; i<size; i++){
        $('#tbody').append("<tr><th><img src="+'"'+ Object.values(Object.values((Object.values(data))[4])[i])[4]+'"'+">" + "</th>"+"<td>" + Object.values(Object.values((Object.values(data))[4])[i])[0] + "</td><td>" + Object.values(Object.values((Object.values(data))[4])[i])[2] +"</td><td>" +Object.values(Object.values((Object.values(data))[4])[i])[3]+ "</td><td>" +Object.values(Object.values((Object.values(data))[4])[i])[1]+ "</td></tr>")
    }
})