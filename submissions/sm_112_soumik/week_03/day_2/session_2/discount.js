var amount= 200
total=amount
if (total > 1000){
    total = total - 100
}
else if( total < 1000 && total > 300){ 
    total = total - 10/100 *total
    }
else if(total = total){
}
discount = amount - total
if(total == amount){
    console.log("Sorry no discount!")
}
else{
    console.log("your new price is" + total + "discount" + discount)
}
