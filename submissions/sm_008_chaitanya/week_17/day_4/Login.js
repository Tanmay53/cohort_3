$("#loginButton").click(function(){
    login()
})

function login(){
    var username=$("#username").val()
    var password=$("#pwd").val()

    if(username=="" || password==""){
        alert("Please fill all the Fields !")
        return
    }

    var userLogin={}
    userLogin.username=username;
    userLogin.password=password;
    userLogin=JSON.stringify(userLogin)

    var loginResponse=null
    var xhr=new XMLHttpRequest();
    xhr.open('POST','http://localhost:8080/auth/login')
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8')
    xhr.send(userLogin)
    xhr.onload=function(){
        if(xhr.status==200){
            loginResponse=JSON.parse(xhr.response)
            openForm()
        }
        else{
            console.log(xhr.response)
        }
    }
}

function openForm(){
    window.location='form.html'
}