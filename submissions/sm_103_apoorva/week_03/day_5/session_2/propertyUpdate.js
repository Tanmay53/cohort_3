function propertyUpdate(obj,property,value)
{
    obj[property]=value
        
    return obj
}
var obj={
    name : "Apoorva Krishna",
    email: "apoorva15997@gmail.com",
    password: "Kushal#025",
    hobbies: "cricket"
}
propertyUpdate(obj,"city","banglore")
console.log(obj)