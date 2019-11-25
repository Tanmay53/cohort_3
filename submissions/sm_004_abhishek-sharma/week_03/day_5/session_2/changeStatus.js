// Time Complexity : O(n)
var user1 = {
    name: "Abhishek Sharma",
    status: "Basic",
    creditLimit: 80000
}

var user2 = {
    name: "Rohit Jaiswal",
    creditLimit: 80000
}

console.log(changeStatus(user1, "Premium")) // changed
console.log(changeStatus(user1, "Platinum")) // changed
console.log(changeStatus(user1, "Basic")) // changed
console.log(changeStatus(user2, "Premium")) // Invalid

function changeStatus(obj, property) {
    for (key in obj) {
        if (key == "status") {
            obj[key] = property
            if (obj[key] == "Basic")
                obj.creditLimit = 80000
            else if (obj[key] == "Premium")
                obj.creditLimit = 300000
            else if (obj[key] == "Platinum")
                obj.creditLimit = 600000
            return obj
        }
    }
    return "Invalid input"
}