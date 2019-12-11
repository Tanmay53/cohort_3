function passwordVerify(obj,password)
{
    for (key in obj)
    {
            if(password===obj.password)
                return true
            else
                return false
    }
}
user={
    name : "Apoorva Krishna",
    email: "apoorva15997@gmail.com",
    password: "Kushal#025"
}
password="Kushal#025"
console.log(passwordVerify(user,password))