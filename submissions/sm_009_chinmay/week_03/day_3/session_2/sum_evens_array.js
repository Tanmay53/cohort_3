// Print the sum of all the even numbers in the given array of numbers

function evenSum(array){
 var sum =0
 
 for(var i=0; i<=array.length-1; i++){
 
  if( array[i] % 2 == 0 ){
   sum += array[i]
  }
 
 }
 console.log("The sum of all the even numbers in the given array of numbers is: " +sum)
}

evenSum([1,2,3,4,5,6,7,8,10])
// evenSum([1,2,3,4,5,6,7,8,9])
// evenSum([2,33,2,11,22,45,56,6565,0])
// evenSum([3,123,12,21,2,3,1,4,5,5,1,0])