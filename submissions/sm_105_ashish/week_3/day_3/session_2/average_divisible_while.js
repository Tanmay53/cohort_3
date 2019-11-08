var n = 0;
var number=35;
var divisor=7;
var sum=0;
var x=0;
var average;
while (n<=number)
 {
   if(n%divisor==0)
    {
     sum=sum+n;
     x=x+1;
    }
    n++
}
average=sum/x;
console.log('Average of number divisible by'+' '+divisor+' '+'between 0 and'+' '+number+' '+'is'+' '+average)

