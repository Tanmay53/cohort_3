
function reverse_string(word, i=0) {

  if(i >= word.length) {
    return "";
  }

  return reverse_string(word, i+1) + word[i];
}


console.log(reverse_string("amrahs dnilaa"));