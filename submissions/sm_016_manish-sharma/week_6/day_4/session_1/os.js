// var selValue= $('#select').val()

function select(){
    var selValue= $('#select').val()
    $.ajax({
        method:"GET",
        url: 'http:/localhost:8080/codenames/'+selValue,
    })
    .done(function(response){
        var data = JSON.parse(response)
        // console.log(data.codenames)
        $('#table > tr').remove()
        $(data.codenames).each(function(i){
            $('#table').append('<tr><td>'+data.codenames[i].version+'</td><td>'+data.codenames[i].name+'</td></tr>')
        })
        
    })
}

$('#submit').on('click',select)
