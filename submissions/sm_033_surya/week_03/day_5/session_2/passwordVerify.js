var user_password = "surya"
var user = {
    name : "teja",
    Email :"surya11472@gmail.com",
    password : "surya"
}

passveri(user , user_password) // calling the function


function passveri(user,user_password){

    for( i = 0; i < user.password.length; i++)
    {
        if(user.password[i] == user_password[i])
        {
            a = 1
        }

        else{
            a = 0
        }
      
    }
    if (a == 1)
    {
        console.log("true")
    }
    else
    {
     console.log("false")   
    }
    a = 0
}

// 1994

// teja