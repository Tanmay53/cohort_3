function changeStatus(obj, statusVal){

    if(obj.Status == undefined){
        return ('Invalid Response')
    }
    else if(statusVal === 'Basic'){
        obj.Status = statusVal
        obj.CreditLimit = 80000
        return obj
    }
    else if(statusVal === 'Premium'){
        obj.Status = statusVal
        obj.CreditLimit = 300000
        return obj
    }
    else if(statusVal === 'Platinum'){
        obj.Status = statusVal
        obj.CreditLimit = 600000
        return obj
    }

}

user1 = {
    Name: 'A',
    CreditLimit: 1
}

user2 = {
    Name: 'B',
    Status: 'Broke AF',
    CreditLimit: 0
}

user3 = {
    Name: 'C',
    Status: 'Middle Class',
    CreditLimit: 20000
}

user4 = {
    Name: 'D',
    Status: 'Rich AF',
    CreditLimit: 500000
}

console.log(changeStatus(user1,'Basic'))
console.log(changeStatus(user2,'Basic'))
console.log(changeStatus(user3,'Premium'))
console.log(changeStatus(user4,'Platinum'))