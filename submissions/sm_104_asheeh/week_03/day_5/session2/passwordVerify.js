function passwordVerify(object , enteredPassword)
{
        if(object["password"] == enteredPassword)
        {
            return true;
        }
        else
        {
            return false;
        } 
}

var user = {
    name : "Sudhir",
    password : "ashish@123"
};
console.log(passwordVerify(user , "ashis@123"));