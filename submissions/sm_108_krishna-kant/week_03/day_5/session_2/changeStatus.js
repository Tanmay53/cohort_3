// Initializing object
var user = {
  name: "Krishna Kant Sharma",
  email: "asgaurdnation@gmail.com",
  password: "Cka0xns9an",
  creditLimit: 0,
  status: "Platinum"
};
var status = "Basic";

// Changing Credit Limit of User according status
function changeStatus(obj, status) {
  if (user.status == undefined) {
    //check if user has status
    return "Invalid Input";
  } else {
    if (user.status == "Basic") {
      user.creditLimit = 80000;
    } else if (user.status == "Premium") {
      user.creditLimit = 300000;
    } else if (user.status == "Platinum") {
      user.creditLimit = 600000;
    }
    return user;
  }
}

// generating output
console.log(changeStatus(user));
