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
        name: "Manish",
        password: "123aditya"
     }
     

console.log(passwordchk(user,"123Afvgs"))