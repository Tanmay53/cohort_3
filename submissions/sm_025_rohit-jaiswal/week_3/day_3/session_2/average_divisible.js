var limit = 50; 
var div = 5;
var sum = 0;
var count = 0;
for(var i=1; i <= 50; i++){
  if (i%5==0){
    sum = sum + i;
    count++
  }
}
console.log(sum/count)