function propertyCheck(obj,key){
    //if key is not found in the obj, returns undefined
    if(obj[key]!=undefined){
        return true
    }
    else{
        return false
    }
}

console.log(propertyCheck({name:"prakash",age:25},"gender"))
