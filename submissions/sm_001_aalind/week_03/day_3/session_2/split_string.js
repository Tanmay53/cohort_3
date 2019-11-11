// Given a string and a split word/character generate a array of strings from the given string, 
// splitting at the occurence of each split character (NOTE: You can't use inbuilt methods)


// For single Character .....

// function split_string(word, character) {
//   var arr = [];
//   var split_word = "";

//   for(var i = 0;i < word.length;i++) {
//     if(word[i] != character) {
//       split_word += word[i];
//     } else {
//       arr.push(split_word);
//       split_word = "";
//     }
//   }
//   arr.push(split_word);

//   return arr;
// }

// For multiple characters word ....

function split_string(word, character) {
  var arr = [];
  var split_word = "";
  var word_len = word.length;
  var char_first = character[0];
  var found = true;
  var char_len = character.length;

  for(var i = 0; i < word.length; i++) {
    if(word[i] != char_first) {
      split_word += word[i];
    } else {
      for(var j = 1; j < char_len; j++) {
        if(word[i+j] != character[j]) {
          found = false;
          break;
        }
      }
      if(found) {
        arr.push(split_word);
        split_word = "";
        i += (char_len - 1);
      } else {
        split_word += word[i];
        found = true;
      }
    }
  }
  arr.push(split_word);

  return arr;
}

console.log(split_string("asazHow, a,, , ,re you doing todazazayaz, , ", ","));