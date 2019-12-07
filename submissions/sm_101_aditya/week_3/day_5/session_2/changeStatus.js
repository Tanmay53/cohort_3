function changestatus(user,statusvalue)
{
 if(statusvalue=="Basic")
 {
     user.status=statusvalue
     user.creditLimit = 70000
 }
 else if(statusvalue=="Premium")
 {
     user.status=statusvalue
     user.creditLimit = 300000
 }
 else if(statusvalue=="Platinum")
 {
     user.status=statusvalue
     user.creditLimit = 500000
 }
 else
 {
     console.log("invalid")
 }
 return user
}

var user={
    name: "Aditya",
    age:20,
    status: "Basic",
    creditLimit : ""
}

console.log(changestatus(user,"Platinum"))