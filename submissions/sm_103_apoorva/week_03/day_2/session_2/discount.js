var total= 550;
var Discount=total;
if(total>1000)
{
    discount=100;
    total=total-discount;
    console.log("Final Price: "+total +", Discount price:"+discount );
}

else if(total<300){
    console.log("Discount is Invalid.Final Price: "+ total)

}
else if(300>= total <=1000){
    discount=total/10;
    total=total-discount;
    console.log("Final Price: "+total +", Discount price:"+discount );
}
