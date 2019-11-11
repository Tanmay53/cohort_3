
var number=20;
var divisor=7;
var sum=0;
var x=0;
var average=0;
for(var i=0;i<=number;i++)
{
    if(i%divisor==0)
    {
        sum=sum+i;
        x=x+1;
    }
}
average=sum/x;
console.log('Average of number divisible by'+' '+divisor+' '+'between 0 and'+' '+number+' '+'is'+' '+average)
