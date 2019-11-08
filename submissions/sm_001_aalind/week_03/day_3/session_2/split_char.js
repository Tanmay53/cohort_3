// Given a string, split the string into single characters and store into an array 
// (NOTE: You can't use inbuilt methods)

function split_char(word) {

  var arr = [];

  for(var i = 0;i < word.length;i++) {
    arr.push(word[i]);
  }

  return arr;
}

console.log(split_char("aalind sharma"))