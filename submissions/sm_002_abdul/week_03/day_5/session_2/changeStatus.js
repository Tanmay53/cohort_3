function changeStatus(user,statusValue){

    if (!statusCheck(user)){
        return "invalid input";
    }

    
    user.status=statusValue;

    if (statusValue="Basic"){
        user.creditLimit="Rs.80000";
    }
    if (statusValue="Premium"){
        user.creditLimit="Rs.300000";
    }
    if (statusValue="Platinum"){
        user.creditLimit="Rs.600000"
    }

    return user;

}

function statusCheck(user){
    var arrayOfUserKeys=Object.keys(user);

    for (var i=0;i<arrayOfUserKeys.length;i++){
        if (arrayOfUserKeys.indexOf("status")===-1){
            return false;
        }
    }
    return true;
}

user={
    name:"oliver",
    age:30,
    profession:"mayor",
    // status:"yetToDecide",
}

console.log(changeStatus(user,"Platinum"))
