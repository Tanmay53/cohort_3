var user = {
    name: "Abhishek",
    college: "BMSIT",
    degree: "BTech",
}
console.log(user)
console.log(propertyUpdate("skills", "Java Developer"))
console.log(propertyUpdate("skills", "Web Developer"))
console.log(propertyUpdate("bapu", "Full Stack Developer"))

function propertyUpdate(property, value) {
    for (key in user) {
        if (key == property) {
            user[key] = value
        }
        else
            user[property] = value
    }
    return user
}
