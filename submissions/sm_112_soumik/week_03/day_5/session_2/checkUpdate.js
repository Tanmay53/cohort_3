var value = 300001;
var user = {
  status: "Basic"
};
function userCheck() {
  if (user.status == undefined) {
    console.log("Invalid");
  } else {
    if (value <= 80000) {
      user.status = "Basic";
      user.credit = 80000;
    } else if (value > 80000 && value <= 300000) {
      user.status = "Premium";
      user.credit = 300000;
    } else if (value > 300000 && value <= 600000) {
      user.status = "Platinum";
      user.credit = 600000;
    }
    return user;
  }
}
console.log(userCheck(value));

