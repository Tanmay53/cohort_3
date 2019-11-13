var arra = [1,2,3,4,5]
var x = 0
newArra = arra.map(function (value,index) {
   if (index == 0)
   {    x = value
       return 1   
   }
   if ( x > value )
   {
       return -1
   }
   else 
    {
        x = value
        return 1
    }
    
})

console.log(newArra) // output array
 
// sample test cases
// arra = [9,8,7,6,5,4]
//  arra  = [1,2,3,4,5]