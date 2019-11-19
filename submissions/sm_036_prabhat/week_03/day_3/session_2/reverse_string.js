var str = "";
function reverseString (string) {
  for( var i = string.length-1; i >= 0; i--){
    str +=string[i];
  }
  return(str);
} 
console.log(reverseString("prabhat"))