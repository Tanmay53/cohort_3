
function count_consonants(word) {
  var count = 0;

  for(var i = 0;i < word.length;i++) {
    if(word[i] != "a" && word[i] != "e" && word[i] != "i" && word[i] != "o" && word[i] != "u" && word[i] != " ") {
      count += 1;
    }
  }

  return count;
}

console.log(count_consonants("aalind sharma"))