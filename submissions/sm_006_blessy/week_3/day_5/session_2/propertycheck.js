function propertycheck(object,property){
    if(object[property]==undefined)
    {
        return false;
    }
    else
    {
    return true;
    }
}
var object ={
    name:"blessy",
    age:"23"
}
console.log(propertycheck(object,"name"))
console.log(propertycheck(object,"qualification"))