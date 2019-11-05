total = 2000
discount = 0.1*total
if (total < 300){
    console.log("Discount is Invalid. Final Price:" + total )
}
    else if (total >1000){
        console.log("Final Price is:" + (total - 100) , "Discount is:" + 100)
}
    else if (total => 300 & total < 1000){
        console.log("Final Price is: " + (total - discount) , "Discount is:" + discount)
    }
   



