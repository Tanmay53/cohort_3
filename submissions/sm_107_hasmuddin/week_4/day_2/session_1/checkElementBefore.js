itemPrice = [100, 2430, 3128, 4652, 5000];
//function for adding item price;
function priceSum(array) {
  sum = array.reduce(function(element, index) {
    return element + index;
  });
  console.log(sum);
}
//revoking function
priceSum(itemPrice);

//output : 15310
