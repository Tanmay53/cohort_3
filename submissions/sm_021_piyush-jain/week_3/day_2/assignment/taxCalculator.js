var Income=500000
var saving=100000
var tax
if(Income<500000)
{
    saving=saving*0.5
}
else if((Income>=500000) && (Income<1000000))
{
    saving=saving*0.3
}
else 
    saving=saving*0.1

if(saving>50000)
{
    saving=50000
}    
Income=Income-saving
if((Income>250000) && (Income<500000))
{
      Income-=250000
      tax=Income*0.1
}
else if((Income>500000) && (Income<1000000))
{
      Income-=500000
      tax=(Income*0.2)+25000
}
else 
{
      Income-=1000000
      tax=(Income*0.3)+75000
}
console.log("Total tax paid",tax)