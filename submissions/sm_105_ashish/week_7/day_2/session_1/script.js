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

       $("#table").append()

    }

$('#addUser').click(function(){
    getUserData()
  console.log(userArr)
    alert('good')
})


})