var obj={
    name:"name1",
    age:"age",
    college:"college"
}
function propertycheck(obj,property){
    for(key in obj)
    {
        if(key == property)
        {
            return true
        }
    }
    return false
}
console.log(propertycheck(obj,"age"))