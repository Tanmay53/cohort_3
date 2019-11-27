//Invoking function
var inputObj = {};

console.log(propertyCheck(inputObj))

function propertyCheck(inputObj) {
    if (Object.keys(inputObj).length === 0) {
        return false;
    } else {
        return true;
    }
}


//input
// var inputObj = {
//     sagar: '',
//     this: 2
// };
// output :true
//input : 
// inputObj = {};
// output: false