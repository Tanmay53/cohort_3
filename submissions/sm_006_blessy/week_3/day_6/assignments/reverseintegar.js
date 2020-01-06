//reverse a string
function reverseString(string){
    rev = ""
    for(var i=string.length-1; i>=0; i--){
            rev += string[i]
        }
        return rev
}
//reverse integar
function reverseIntegar(num){
  
    var reversedNumber = parseInt(reverseString(num.toString()))
    return (reversedNumber * Math.sign(num))
   // return reversedNumber
 }
  console.log(reverseIntegar("-1234"))
    
    
    
   