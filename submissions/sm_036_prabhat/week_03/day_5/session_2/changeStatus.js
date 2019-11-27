function changeStatus (user, val){
    if(user.status){
        if(val == "basic" || val == "Basic"){
            user.status = "Basic";
            user.credit = 80000;
            console.log("Status Updated SuccessFully")
        }
        else if(val == "premium" || val == "Premium"){
            user.status = "Premium";
            user.credit = 300000;
            console.log("Status Updated SuccessFully")
        }
        else if(val == "platinum" || val == "Platinum"){
            user.status = "Platinum";
            user.credit = 600000;
            console.log("Status Updated SuccessFully")
        }
        return user;
    }
    else{
        return("Invalid User")        
    }  
}

var user = {
    status : "basic",
    credit : "100000"
}
console.log(changeStatus(user , "Baic"))