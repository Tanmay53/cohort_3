// funciton which accepts an array of values. each value is represented in this format. Item Price
//total cost of all items using the reduce function
//Use only a single reduce function to solve this problem

function checkElement(array) {

    var totalPrice = array.reduce((total, element) => total + element[1], 0)

    return totalPrice;
}


var arr = [["milk", 20], ["bread", 30], ["biscuit", 50], ["oats", 100]];


console.log(checkElement(arr));