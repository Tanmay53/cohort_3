function passwordverify(user,password)
{
    if(user.password==password){
        console.log("true")
    }
    else{
        console.log("false")
    }
}

user={
    name:"blessy",
    password:"blessymariya123"
}

console.log(passwordverify(user,"blessy123"))