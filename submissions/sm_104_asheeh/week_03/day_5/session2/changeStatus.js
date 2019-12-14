function changeStatus(object, statusValue)
{
    var keyStatus = "status", cnt = 0;
    for(key in object)
    {
        if(key == keyStatus)
        {
            object[key] = statusValue;
            if(statusValue == "Basic")
            {
                object["creditLimit"] = 80000;
            }
            else if(statusValue == "Premium")
            {
                object["creditLimit"] = 300000
            }
            else if(statusValue == "Platinum")
            {
                object["creditLimit"] = 600000
            }
            cnt++;
            return object;
        }
    }
    if(cnt == 0)
    {
        return "Invalid input";
    }
}

var customer = {
    name : "Amit",
    creditLimit : 80000,
    status : "Basic"
};

console.log(changeStatus(customer, "Platinum"));

