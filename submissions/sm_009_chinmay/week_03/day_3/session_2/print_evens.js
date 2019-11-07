// Print the even numbers from 0 to given limit

function printEvens(limit){
 for(i=0; i<=limit; i++){
  if(i%2==0){
   console.log(i)
  }
 }
}

printEvens(20)
// printEvens(10)
// printEvens(123)
// printEvens(-10)