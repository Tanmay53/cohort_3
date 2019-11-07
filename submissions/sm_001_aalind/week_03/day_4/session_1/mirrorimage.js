// Print the mirror image of the given string AyzB should become ZbaY

function mirrorImage(word) {
  var cap_alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var small_alpha = "abcdefghijklmnopqrstuvwxyz";
  var new_word = "";

  for(var i = 0; i < word.length; i++) {
    var index = cap_alpha.indexOf(word[i]);

    if(index >= 0) {
      new_word += cap_alpha[25-index];
    } else {
      index = small_alpha.indexOf(word[i]);
      new_word += small_alpha[25-index];
    }
  }

  console.log(new_word);
}

mirrorImage("AyPzB");