function changeStatus(user, value) {
    if(user['status'] == undefined) {
        return 'Invalid Input'
    }

    //update user status
    user['status'] = value
    switch(value) {
        case 'Basic':
            user['limit'] = 80000
            break
        case 'Premium':
            user['limit'] = 300000
            break
        case 'Platinum':
            user['limit'] = 600000
    }

    return user
}

// main
var user = { "name" : 'Rohit Kumar',
             "limit" : 80000,
        }
status = 'Platinum'

console.log(changeStatus(user, status))        

/* 
------------------------------------ Test Case -----------------------------------------------------
Input                                                                       Output
var user = { "name" : 'Rohit Kumar',
             "status" : 'Basic',
             "limit" : 80000,
        }
status = 'Premium'                                                   { name: 'Rohit Kumar', status: 'Premium', 
                                                                     limit: 300000 }


var user = { "name" : 'Rohit Kumar',
             "status" : 'Basic',
             "limit" : 80000,
        }
status = 'Platinum'                                                 { name: 'Rohit Kumar', status: 'Platinum', 
                                                                    limit: 600000 }
                                 
var user = { "name" : 'Rohit Kumar',
             "limit" : 80000,
        }                   
status = 'Platinum'                                                  Invalid Input

*/