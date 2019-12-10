function changeStatus(obj,status)
{
    if(obj.status == undefined)
    {
        return "Invalid"
    }
    else
    {
        if(obj.status == "Basic")
        {
            obj.credit = 80000
        }
        else if(obj.status == "Premium")
        {
            obj.credit = 300000
        }
        else if(obj.status == "Platinum")
        {
            obj.credit = 600000
        }
    }

    return obj
}

var obj = {
    name : "Apoorva Krishna",
    email: "apoorva15997@gmail.com",
    password: "Kushal#025",
    credit : 30000,
    
}

console.log(changeStatus(obj,"Premimum"))