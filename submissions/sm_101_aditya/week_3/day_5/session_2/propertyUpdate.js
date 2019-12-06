function propertyupdate(user,property,value)
{
    user[property]=value
    return user

}
var user={
    "name":"Aditya",
    "age":21,
}
console.log(propertyupdate(user,"name","sinha"))