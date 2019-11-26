var user={
    status:"status",
    credit_limit:0
}
function updateLimit(obj,value){
    for(key in obj)
    {
        if(key == "status")
        {
            if(value === "Basic")
            {
                obj["status"]="Basic"
                obj["credit_limit"]=80000
            }
            else if(value === "Premium")
            {
                obj["status"]="Premium"
                obj["credit_limit"]=300000 
            }
            else 
            {
                obj["status"]="Platinum"
                obj["credit_limit"]=600000
            }
            return obj
        }
    }
    return "Invalid Response"
}
console.log(updateLimit(user,"Premium"))
