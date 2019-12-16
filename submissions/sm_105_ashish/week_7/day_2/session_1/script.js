$(document).ready(function(){
    var userArr=[]


    function getUserData(){
        event.preventDefault()

       var fName= $('#fName').val()
       var lName= $('#lName').val()
       var userName= $('#userName').val()
       var password= $('#inputPassword').val()
       var email= $('#email').val()
       var address= $('#address').val()
       var userType= $('#userType').val()

        var newUser={
            fName:fName || 'Ashish',
            lName:lName || "Kumar",
            userName:userName || "default",
            password:password || "default",
            email:email || "default",
            address:address || "deafult",
            userType:userType || "default"
        }
       userArr.push(newUser)
    //    $("#displayBox").append(`<p> Welcome ${newUser.fName}
    //                                           your username is ${newUser.userName}`)

    //    $("#table").append('<tr><th row="scope">'+newUser.userType+'</th><td>'+newUser.fName+'</td><td>'+newUser.lName+'</td><td>'+newUser.userName+'</td><tr>')

    }
  

$('#addUser').click(function(){
    getUserData()
    userArr.forEach(function(ele){
      $("#userNameSelect").append("<option value="+ele.userName+">"+ele.userName+'</option>')
    })
  console.log(userArr)
})

$("#userNameSelect").change(function(){
    alert('good')
    var a=$("#userNameSelect").val()
    checkUser(userArr,a)
})
function checkUser(arr,input){
    arr.forEach(function(ele){
        for(key in ele){
            
          if(ele[key]==input){
            $("#displayBox").append(fillInfo(ele))
          }
        }
    })
}
function fillInfo(user){
    return `<div>
                <div> Hello ${user.fName}, welcome back </div>
                <div> Registered email is ${user.email}</div>
                </div>`

}
console.log(arr)

$("#userType").change(function(){
  var usertype=$("#userType").val()
 console.log(arr)
  $("#table").append('<tr><th row="scope">ashish</th><td>ashsih</td><td>ashish</td><td>ashish</td><tr>')

//alert('Good')
})

}) 