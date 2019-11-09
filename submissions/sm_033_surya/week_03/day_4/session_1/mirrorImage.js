var data ="mASAi"
function reverseimg(){
var Cap_alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" // reference arrays
var smal_alpha =  "abcdefghijklmnopqrstuvwxyz"
var x = ""
var sum = ""
for ( i = 0; i < data.length ; i++)
{
    for ( j = 0 ; j < Cap_alpha.length ; j++)
    {
            if( data[i] ==  Cap_alpha[j] )  // comparing existance of elements
            {
                var x = Cap_alpha[26-j-1] 
            }
            if(data[i] == smal_alpha [j])    // comparing existance of elements
                {         
                var x = smal_alpha[26-j-1]
            }
    }
    var sum = sum + x
    x = 0
}
console.log(sum)
}
reverseimg(data)

// sample test--
//SuryA
// MasaI