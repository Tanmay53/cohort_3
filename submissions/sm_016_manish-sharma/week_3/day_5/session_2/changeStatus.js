function changeStatus(object, value) {
    if (object.status === undefined) {
        console.log('invalid input')
    }
    else {
        object.status=value
        if (object.status == 'Basic') {
            object['credit limit'] = 80000
            console.log(object)
        }
        else if (object.status == 'Premium') {
            object['credit limit'] = 300000
            console.log(object)
        }
        else if (object.status == 'Platinum') {
            object['credit limit'] = 600000
            console.log(object)
        }
    }
}

//objects
var user1 = {
    status: 'N',
    'credit limit': 0,
}
var user2={
    'credit limit':0,
}


changeStatus(user1, 'Basic')
changeStatus(user2, 'Basic')
changeStatus(user1, 'Premium')
changeStatus(user1, 'Platinum')