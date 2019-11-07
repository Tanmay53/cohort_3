
function count_vowels(word) {
  var count = 0;

  for(var i = 0;i < word.length;i++) {
    if(word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u") {
      count += 1;
    }
  }

  return count;
}

console.log(count_vowels("aalind sharma"))