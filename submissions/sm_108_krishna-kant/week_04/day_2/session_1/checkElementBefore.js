// array consist of item_price
var array = [100, 200, 250, 600, 500];

//
function sumOfPrice(array) {
  //  returning sum of the prices
  return array.reduce(function(acc, curr) {
    return (acc += curr);
  }, 0);
}

// generating output
console.log("The sum of price", sumOfPrice(array));
