function addSkills (user, skill ,val){ 
    if(user[skill] != val){
        user[skill].push(val);
    }
    else{
        user[skill] = [val];
    }

    return user;
}

var user = {
    Name : "Prabhat",
    Place : "Patna",
    Hobies : ["Coding"],
}
console.log(addSkills(user, "Hobies" ,"Cong"))