
function repeatWord(word, times) {
  var repeated = "";
  
  for(var i = 0; i < times; i++) {
    repeated += word;
  }

  return repeated;
}

function pyramid(level) {
  var row = "";

  for(i = level; i >= 1; i--) {
    row = repeatWord(".", i) + repeatWord("o.", level-i+1) + repeatWord(".", i-1);
    console.log(row);
    row = "";
  }
}

function inversePyramid(level) {
  var row = "";

  for(var i = 1; i <= level; i++) {
    row = repeatWord(".", i) + repeatWord("o.", level-i+1) + repeatWord(".", i-1);
    console.log(row);
    row = "";
  }
}

function rhombus(level) {
  pyramid(level);
  for(var i = 2; i <= level; i++) {
    row = repeatWord(".", i) + repeatWord("o.", level-i+1) + repeatWord(".", i-1);
    console.log(row);
    row = "";
  }
}

// rhombus(4);