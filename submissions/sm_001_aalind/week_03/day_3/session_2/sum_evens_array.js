
function sum_evens_array(arr) {
  var sum = 0;

  for(var i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0) {
      sum += arr[i];
    }
  }

  return sum;
}

console.log(sum_evens_array([1,1,2,4,5,2,2]))