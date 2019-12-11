var inp = {
    course: "FSD",
    campus: "BLR",
    joining: "19/10"
}

function propertyCheck(property) {
    for (key in inp) {
        if (key == property)
            return true
    }
    return false
}
console.log(propertyCheck("sprint"))