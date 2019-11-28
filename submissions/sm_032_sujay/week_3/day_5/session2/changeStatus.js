user1 = {
    status : "Basic",
    credit : "",
}
user2 = {
    status : "Premium",
    credit : "",
}
user3 = {
    status : "Platinum",
    credit : "",
}


function changeStatus(obj,status){
    if(obj['status']=='Basic')
    {
        obj.credit='80,000'
    }
    else if (obj['status']=='Premium')
    {
        obj.credit='3,00,000'
    }
    else if (obj['status']=='Platinum')
    {
        obj.credit='6,00,000'
    }

console.log(obj)
}changeStatus(user1,'Basic')
changeStatus(user2,'Premium')
changeStatus(user3,'Platinum')