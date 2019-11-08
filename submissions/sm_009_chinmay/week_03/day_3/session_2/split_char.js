// Given a string, split the string into single characters and store into an array (NOTE: You can't use inbuilt methods)


function splitChar(string){
 var arr = []
 for(var i=0; i<string.length; i++){
  arr.push(string[i])
  // console.log(arr)
 }
 console.log(arr)
 return arr
}

// splitChar("123123")
splitChar('abcdef123')