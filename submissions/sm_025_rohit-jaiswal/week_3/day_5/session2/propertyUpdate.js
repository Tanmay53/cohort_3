var input = {
    candidate: "Rohit",
    profession: "GUI Designer"
}

function propertyUpdate(prop, detail) {
    for (key in input) {
        if (key == prop) {
            input[key] = detail
        } else
            input[prop] = detail
    }
    return input
}
console.log(input)
console.log(propertyUpdate("candidate", "Rohit Jaiswal"))
console.log(propertyUpdate("profession", "GUI Designer and Full Stack Developer"))