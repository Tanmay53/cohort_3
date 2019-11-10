var userObject = { //input object
    name: 'sagar',
}

var status = 'Platinum' //input status

//Invoking function
var updatedObj = changeStatus(userObject, status)
console.log(updatedObj)



//function for changeStatuss
function changeStatus(object, value) {

    if (typeof(object.status) === 'undefined') {
        return "invalid input";
    } else {
        object.status = value;
        if (object.status === "Basic") {
            object['credit_card_limit(Rs.)'] = 80000;
        } else if (object.status === "Premium") {
            object['credit_card_limit(Rs.)'] = 300000;
        } else {
            object['credit_card_limit(Rs.)'] = 600000;
        }
    }
    return object;
}


//test case:
// input:
// var userObject = { 
//     name: 'sagar',
//     status: 'Premium'
// }
// var status = 'Platinum'
// output:
// { name: 'sagar',
//   status: 'Platinum',
//   'credit_card_limit(Rs.)': 600000 }

// --------------- 

// var userObject = { 
//     name: 'sagar',
// }
// var status = 'Platinum'
// output:
// invalid input