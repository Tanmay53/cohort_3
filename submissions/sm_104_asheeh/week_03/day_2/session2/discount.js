var total=400, disc_rate=0.1, discount, Final_Price, Discount_Price
discount=total*disc_rate
if(total<300){
                console.log('Discount is Invalid. Final price:',total)
}
 

else if(discount<=100){
     Final_Price=total
     Discount_Price=total-discount
     console.log('Final price:',Final_Price)
     console.log('Discount price:',Discount_Price)
}
else{
      Final_Price=total-100
      
      console.log('Final price:',Final_Price)
     console.log('Discount price:100')
}