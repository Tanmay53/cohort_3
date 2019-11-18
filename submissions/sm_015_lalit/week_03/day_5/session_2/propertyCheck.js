function propertycheck(NewObject, City) {
    reqArray = Object.keys(NewObject)
    result = "false"
    for (i = 0; i < reqArray.length; i++) {
        if (reqArray[i] == City) {
            result = "true"
        }
    }
    console.log(result)
}

NewObject = {
    Name: "Lalit",
    City: "Sonipat"
}

propertycheck(NewObject, "City")
propertycheck(NewObject, "Country")