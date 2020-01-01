
function reversestring(string){
    rev = ""
   for(var i=string.length-1; i>=0; i--){
           rev += string[i]
       }
   return string === rev;
   }
   console.log(reversestring("mariya"))
   console.log(reversestring("racecar"))


