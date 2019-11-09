// function to add/update status of a object property
function changeStatus(userObj, newStatus) {
  if (userObj.status == undefined) {
    return "Invalid data!";
  } else {
    if (newStatus == "Basic") {
      userObj.credit = 80000;
      userObj.status = newStatus;
    } else if (newStatus == "Premium") {
      userObj.credit = 300000;
      userObj.status = newStatus;
    } else if (newStatus == "Platinum") {
      userObj.credit = 600000;
      userObj.status = newStatus;
    }
  }
  return userObj;
}

// input
user = {
  name: "Amit Kumar",
  age: "123",
  credit: 50000,
  status: "Basic"
};
var newStatus = "Platinum";

// output
console.log(changeStatus(user, newStatus));
