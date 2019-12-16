$(document).ready(function(){
    $('#btnSubmit').click(function(){
        var search=$("#search").val()
        event.preventDefault();
        $.ajax({
            url:"https://reqres.in/api/jobs?q=Web%20"+search+"",
            contentType: "application/json"
        }) 
        .done(function(data){
            console.log(data)
            newData=data
            displayData(data)
        });
    });
    

    
    function displayData(newData){
        // console.log(newData.id)
        $('#tbody').html=""
        newData.data.forEach(function(val){
            $('#tbody').append("<tr>"+
            "<td>"+val.id+"</td>"+
            "<td>"+val.name+"</td>"+
            "<td>"+val.year+"</td>"+
            "</tr>"); 
        })
    }
});

