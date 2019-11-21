var user = {
    name: "Abhishek",
    college: "BMSIT",
    degree: "BTech",
    profile: "Java developer"
}
console.log(user)
console.log(propertyUpdate("name", "Abhishek Sharma"))
console.log(propertyUpdate("year", "2019"))
console.log(propertyUpdate("profile", "Web Developer"))

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
