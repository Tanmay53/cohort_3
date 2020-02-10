var user = {
    Name: 'Yashwanth Kore',
    Status: "",
    Creditlimit: ""
}
function changeStatus(obj, statusvalue) {
    if (statusvalue == "Basic") {
        obj.Status = statusvalue;
        obj.Creditlimit = '80,000';
        console.log(user)
    }
      else if (statusvalue == "Premium") {
        obj.Status = statusvalue;
        obj.Creditlimit = '3,00,000';
        console.log(user)
    }
     else if (statusvalue == "Platinum") {
        obj.Status = statusvalue;
        obj.Creditlimit = '6,00,000';
        console.log(user)
    }
}
changeStatus(user, "Basic")