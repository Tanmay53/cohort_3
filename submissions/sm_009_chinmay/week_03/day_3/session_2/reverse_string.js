// Print the given string in reverse order (NOTE: You can't use inbuilt methods)

function reverseString(string){
 var revString = ""
 for(i=string.length-1; i>=0; i--){
  // console.log(i)
  for(j=0; j<string[i].length; j++){
   revString = revString + string[i][j]
  }
 }
 console.log(revString)
}

reverseString("CHINMAY")

//reverseString("123456789")
//reverseString("123a3123asdf")