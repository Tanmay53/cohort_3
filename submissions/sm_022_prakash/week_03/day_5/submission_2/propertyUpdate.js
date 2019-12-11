function propertyUpdate(obj,key,val){
    // console.log(obj)
    obj[key] = val
    return obj
}

var user = {
    name: "prakash",
    password: "12345"
}
// user.gender = "M"

console.log(propertyUpdate(user,"gender","M"),user)
// console.log(user)