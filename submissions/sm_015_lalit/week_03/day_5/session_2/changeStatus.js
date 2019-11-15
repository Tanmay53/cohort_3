user1={
    name: "akbar",
    status: "Basic",
    creditlimit:0
}
user2={
    name: "amar",
    status: "Platinum",
    creditlimit:0
}
user3={
    name: "anthony"
}
if (user1["status"] === undefined){
    console.log("invalid")
}
if (user2["status"] === undefined){
    console.log("invalid")
}
if (user3["status"] === undefined){
    console.log("invalid")}

    user1.creditlimit=80000

    user2.creditlimit=600000

console.log(user1,user2,user3)