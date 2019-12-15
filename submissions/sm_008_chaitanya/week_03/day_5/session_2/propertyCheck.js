function propertyCheck(prop) {
    var user = {
        name: 'chathan',
        age: 28,
        gender: 'male'
    }
    flag = false
    for (key in user) {
        if (key == prop) {
            flag = true
        }
    }
    if (flag == true) {
        console.log("True")
    }
    else {
        console.log("False")
    }
}

propertyCheck("height")
