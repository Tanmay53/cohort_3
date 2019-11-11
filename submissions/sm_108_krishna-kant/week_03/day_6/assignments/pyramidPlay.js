var level = 4;
var pyramid = "";
var x = 2;
var pos = [];
// pyramid
function pyramidRight(level) {
  var horizantalItems = level * 2 + 1;
  pos.push(Math.ceil(horizantalItems / 2));
  pyramid = "";
  for (var i = 0; i < level; i++) {
    console.log(createHorizantle(horizantalItems, i));
    pos.push(Math.ceil(horizantalItems / 2) + x);
    pos.push(Math.ceil(horizantalItems / 2) - x);
    x = x + 2;
    pyramid = "";
  }
}

function createHorizantle(horizantalItems, index) {
  for (var i = 1; i < horizantalItems + 1; i++) {
    if (indexOf(pos, i)) {
      pyramid += "0";
    } else {
      pyramid += ".";
    }
  }

  return pyramid;
}

pyramidRight(level);
//
function indexOf(args, value) {
  for (i = 0; i < args.length; i++) {
    if (value == args[i]) {
      return true;
    }
  }
  return false;
}
