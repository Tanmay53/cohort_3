var total;
discount = total/10;
if((total > 300) && (discount <= 100)){
   console.log("Final price:" + " " + (total - discount) + ", " + "Discount price: " + discount);
}
else {
     console.log("Discount is Invalid. Final price:" + total);
}
