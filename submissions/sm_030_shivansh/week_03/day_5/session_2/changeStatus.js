// function which will accept a user object, value for status : Basic, Premium, Platinum
//If there is no status property in the user, then return invalid input as response
//Update the credit limit according to the new status

function changeStatus(object, status) {

    if (object["status"] === undefined)
        return "Invalid Input";
    else {
        if (status === "Basics") {
            object["status"] = status;
            object["credit limit"] = 80000;
            return object;
        }
        else if (status === "Premium") {
            object["status"] = status;
            object["credit limit"] = 300000;
            return object;
        }
        else if (status === "Platinum") {
            object["status"] = status;
            object["credit limit"] = 600000;
            return object;
        }
    }
}



var obj1 = {
    "name": "Shivansh Singh",
    "credit limit": "80000",
    "status": "Basics",

}
var obj2 = {
    "name": "Siddharth Singh",
    "credit limit": "180000",
    "status": "Premium",

}

console.log(changeStatus(obj1, "Platinum"));
console.log(changeStatus(obj2, "Platinum"));