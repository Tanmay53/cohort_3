
function split_string(word, character) {
  var arr = [];
  var split_word = "";

  for(var i = 0;i < word.length;i++) {
    if(word[i] != character) {
      split_word += word[i];
    } else {
      arr.push(split_word);
      split_word = "";
    }
  }

  arr.push(split_word);

  return arr;
}

console.log(split_string("asaHow are you doing todaya?a", "a"));