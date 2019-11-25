var g=100
var n =10
var y=0, x=0
while( g % n == 0 && g > 0)
{
  x+=1
  y+=g
  g--  
}

console.log(y)
console.log(x)
console.log(y/x)