var arra = [1,2,1,2,3,1,4,5,3,1,4]
var a = 0
var y = 0

for( i= 0; i < arra.length ; i++)

{
    for ( j = arra.length-1; j >= 0;j--)
    {
        if((arra [i] == arra [j]) && (i != j)) 
          {  
            a = 1  // duplicated element exists
        }
    }

    if (a == 1)
    {   
       y = arra [0] 
       arra[0] = arra[i]
       arra[i] = y 
       arra.shift() // removing duplicated elemnt
       i = 0
       j = 0
    }

    a = 0
}
console.log(arra)