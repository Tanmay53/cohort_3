var obj = {
    name: "Abhishek",
    email: "abhishek.sharma1597@gmail.com",
    passwrod: "abhi1504"
}

function keyCheck(property) {
    for (key in obj) {
        if (key == property)
            return true
    }
    return false
}

console.log(keyCheck("class")) // false
console.log(keyCheck("name")) // true