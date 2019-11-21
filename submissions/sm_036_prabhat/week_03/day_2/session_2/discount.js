var total =299;

if (total < 300){
  console.log("Discount is Invalid");
  console.log("Final price: "+ total);
}

else if ((total >= 300) && (total < 1000)) {
  var num = total/10;
  var sum = total - num;
  console.log("Final price: "+ sum)
}

else if (total >= 1000){
  sum = total-100
  console.log("Final price: "+ sum)
}