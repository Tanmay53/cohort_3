
function avg(arr) {
    var sum = 0
    //var arr =[2,3,6,8,9,4]
    for (i = 0; i < arr.length; i++) {

        sum += arr[i]
    }
    var average = sum / arr.length

    return average
}
console.log(sum)
console.log(avg([2, 3, 6, 8, 9, 4]))








var a=[2,4,5,13,31,21,8,14]
var sum1=0;
var sum2=0;
for(var i=0;i<a.length;i++){
  if(a[i] % 2 == 0){
        sum1 += a[i];
    console.log(sum1)
    }
  console.log(sum1)
    else if (a[i] % 2 == 1){
      sum2 += a[i];
    }
  console.log(sum1)
}
  console.log(sum1)
