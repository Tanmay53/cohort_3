function propertyupdate(user,property,value)
{
    user[property]=value
    return user

}
var user={
    "name":"sakshi",
    "age":21,
}
console.log(propertyupdate(user,"name","sonia"))