function changeStatus(obj, plan) {
    if (plan == undefined || plan == "")
        return 'invalid input'

    for (key in obj) {
        if (plan == 'Basic') {
            obj["status"] = "Basic"
            obj["credit_limit"] = 80000
        }
        else if (plan == 'Premium') {
            obj["status"] = "Premium"
            obj["credit_limit"] = 300000
        }
        else if (plan == 'Platinum') {
            obj["status"] = "Platinum"
            obj["credit_limit"] = 600000
        }
    }
    return obj
}
console.log(changeStatus({ status: "Basic", credit_limit: 3000 }, "Platinum"))
