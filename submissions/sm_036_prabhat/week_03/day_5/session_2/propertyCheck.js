function propertyCheck (obj, prop){
    if(obj[prop]){
        console.log("The Value is = "+ obj[prop] +"  "+"Found")
        return true;
    }
    else{
        console.log("Key Does Not Exist")
        return false;
    }
}

var obj = {
    Name : "Prabhat",
    Email : "qwerty@123",
    Pass : 1234567890,
}

console.log(propertyCheck(obj, "Nme"))