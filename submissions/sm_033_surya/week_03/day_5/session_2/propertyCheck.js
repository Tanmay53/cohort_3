var user = {
    name: "surya",
    age: 25
}
var input = "aage"
propertyCheck(user, input)
function propertyCheck(user, input) {
    // console.log(user[input])
    if (user[input] != undefined) {
        console.log("true")
    } else {
        console.log("false")
    }
}