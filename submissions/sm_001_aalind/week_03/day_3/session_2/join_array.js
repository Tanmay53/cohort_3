
function join_array(arr, character) {
  var new_word = "";
  for(var i = 0;i < arr.length;i++) {
    new_word += String(arr[i]) + String(character);
  }

  return new_word;
}

console.log(join_array(["Banana", "Orange", "Apple", "Mango"], 2))