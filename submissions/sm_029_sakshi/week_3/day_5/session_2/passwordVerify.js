function passwordchk(user,pass)
{
   
     if(user.password===pass)
     {
         console.log("TRUE")
     }
     else
     {
         console.log("false")
     }
    }

     var user={
        name: "sakshi",
        password: "123akshi"
     }
     

console.log(passwordchk(user,"12345sakshi"))