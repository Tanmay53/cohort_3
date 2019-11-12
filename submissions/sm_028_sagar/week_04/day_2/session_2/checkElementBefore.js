var inputArr = ['1 100', '2 200', '3 300', '4 400'];


//Invoking function
console.log("Total Cost: ", totalCost(inputArr));


//function to total cost of items
function totalCost(arr) {
    var totalCost = inputArr.reduce(function(acc, ele) {
        var price = ele.split(' ');
        price = Number(price[1]);
        return acc + price;
    }, 0)
    return totalCost;
}


//input
// inputArr = ['1 100', '2 200', '3 300', '4 400'];
// output : Total Cost:  1000