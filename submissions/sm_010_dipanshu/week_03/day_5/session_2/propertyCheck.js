function propertyCheck(obj,checkProp){
    var keys = Object.keys(obj)
    var index = keys.indexOf(checkProp)

    if(index == -1){
        console.log(false)
    }
    else{
        console.log(true)
    }
}

var user1 = {
    name:   'a',
    age:    '25',
    email:  'd@gmail.com'
}

var user2 = {
    name:   'a',
    age:    '25'
}

propertyCheck(user1,'email')
propertyCheck(user2,'email')