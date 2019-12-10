function propertyCheck(obj,checkKey)
{
    for (key in obj)
    {
        if(key==checkKey)
            return true
    }
    return false
}
obj={
    name : "Apoorva Krishna",
    email: "apoorva15997@gmail.com",
    password: "Kushal#025"
}
checkKey="email"
console.log(propertyCheck(obj,checkKey))