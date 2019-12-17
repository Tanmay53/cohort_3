var eml=document.getElementById('email')
var passw=document.getElementById('password')
var submit=document.getElementById('submit')
submit.addEventListener('click',login)

function login(){
    var obj={
        email: eml.value,
        password: password.value
    }
    var xhr = new XMLHttpRequest()
    var data = JSON.stringify(obj)
    xhr.addEventListener('load',function(){
        if(xhr.status==200){
            $('#cont > div').remove()
            var datain= JSON.parse(xhr.response)
            var val = datain.token
            $('#cont').append('<div class="container m-5 bg-warning"><h2>TOKEN :</h2><h3>'+val+'</h3></div>')
            $('body').attr('class','bg-success')
        }
        else if (xhr.status==400) {
            $('#cont').append('<div class="container m-5 bg-warning"><h2>Error code is:</h2><h3>'+ xhr.status+'</h3></div>')
            $('body').attr('class','bg-danger')
        }
    })
    xhr.addEventListener('error',function(){
        console.log('Error in HTTP request!')
        alert('Error in HTTP request!')
    })
    xhr.open('POST','https://reqres.in/api/login')
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    xhr.send(data)
}