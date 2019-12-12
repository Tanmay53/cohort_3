var userName = document.getElementById("userName")
var loginTime = document.getElementById("loginTime")
var endTime = document.getElementById("endTime")
var sessionEnd = document.getElementById("sessionEnd")


data = localStorage.getItem("userData")
console.log(JSON.parse(data))
getData = JSON.parse(data)
//userName.innerHTML = getData.Username
// getData.forEach(function(element){
//     userName.innerHTML = element.Username
// })
userName.innerHTML = localStorage.getItem("user")
var date = new Date()
var minute = date.getMinutes()
console.log(minute)
//console.log(localStorage.getItem("minute"))
if(localStorage.getItem("minute") - minute < 2)
{
    sessionEnd.innerHTML = "Session Ending"

    setTimeout(function(){
        location = "index.html"
    },10000)
}
else
{
    localStorage.setItem("minute", minute)
}

loginTime.innerHTML = date
date.setMinutes(minute + 5)
endTime.innerHTML = date

function logout()
{
    location = "index.html"
}