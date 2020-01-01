function changestatus(user, value) {
    if (value == "basic") {
        user.value = "basic",
            user.creditlimit = "80000"
    }
    else if (value == "premium") {
        user.value = "premium",
            user.creditlimit = "300,000"
    }
    else if (value == "platinum") {
        user.value = "platinum",
            user.creditlimit = "600,000"
    }
    return user
}
var user = {
    name: "blessy",

}
console.log(changestatus(user, "platinum"))


