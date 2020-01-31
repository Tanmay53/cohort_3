function propertyCheck(property) {
    var details = {
        firstname: "yashwanth",
        lastname: "kore"
    }
    flag = false
    // considering key as key and property as value
    for (key in details) {
        if (key == property) {
            flag = true
        }
    }
    if (flag == true) {
        console.log("Yes")
    }
    else {
        console.log("No")
    }
} propertyCheck("age")