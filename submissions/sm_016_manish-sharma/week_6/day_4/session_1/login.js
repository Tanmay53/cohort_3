function log(){
    var input = $('.inputs')
    var obj={
        password: $(input[1]).val(),
        username: $(input[0]).val()
    }
    var dataout = JSON.stringify(obj)

    $.ajax({
        method:'POST',
        url:'http://localhost:8080/auth/login',
        data: dataout,
        dataType: 'json',
        contentType: 'application/json'
    })
    .done(function(response){
        console.log('Bearer '+response.token)
        // console.log($(input[0]).val())
        $.ajax({
            method:'GET',
            url:'http://localhost:8080/user/'+$(input[0]).val(),
            // Authorization: 'Bearer '+response.token,
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', 'Bearer '+response.token)
     }
        })
        .done(function(response2){
            datain= JSON.parse(response2)
            console.log(datain)
            str=''
            for(key in datain){
                if(key=='token'){
                    continue
                }
                else{
                    str=str+key+':'+datain[key]+'\n'
                }
            }
            $('#cont > div').remove()
            $('#cont').append('<h3>'+str+'</h3>')
        })
    })
}

$('#login').on('click',log)