var num1=0          //given limit
var num2=20//given number

sum=0
value=0

while(num1<=100)
{
    while(num1%num2==0)
    {
       
        console.log(num1)
        sum=sum+num1
        value=value+1
        break
    }
    num1++

}
console.log(sum/value)          