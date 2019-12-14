if(localStorage.getItem('userData') == undefined)
{
    var detail=[]
}else{
    var detail = JSON.parse(localStorage.getItem('userData'));
}
if(localStorage.getItem('admin') == undefined)
{
    var userDetail=[]
}else{
    var userDetail = JSON.parse(localStorage.getItem('admin'));
}
function add()
{
    var email=document.getElementById("emailsignup").value
    var user=document.getElementById("usernamesignup").value
    var password=document.getElementById("passsignup").value
        var userDetails ={
            mail: email,
            Username: user,
            Password:password
        }
     

            detail.push(userDetails)
            var json = JSON.stringify(detail)
            console.log(detail)
            //console.log(json)
            localStorage.setItem("userData",json)
            alert("signup successful")
         
     
        
}
function submit()
    {
        // add()
        // var obj=JSON.parse(json)
        var userName = document.getElementById("username").value
        var pass = document.getElementById("pass").value
        localStorage.setItem("user",userName)
        var getData = localStorage.getItem("userData")
        getData = JSON.parse(getData)
        console.log(getData)

        getData.forEach(function(element){
            console.log(element.Username,element.Password)
            if(element.Username === userName && element.Password === pass )
                location="dash.html"
            
        }) 
        
        var date = new Date()
        console.log(date)
        localStorage.setItem("date",date.toUTCString())

        var admin = {
            user : userName,
            loginTime : new Date().toUTCString()
        }
            userDetail.push(admin)
            var json = JSON.stringify(userDetail)
            //console.log(userDetail)
            localStorage.setItem("admin",json)
        
     
       

    }
    console.log(userDetail)