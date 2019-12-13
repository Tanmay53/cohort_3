function passwordVerify(inp, password) {
    if (inp.password === password) {
        return true
    } else
        return false
}
var input = {
    password: "rohit@2017"
}

console.log(passwordVerify(input, "Rohit@2017"))