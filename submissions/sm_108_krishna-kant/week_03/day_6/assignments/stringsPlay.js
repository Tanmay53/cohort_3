var stringValue = "Hey This is krishna Sharma";
var filterCase = "snakeCase";
//Cases : ['hypenCase','camelCase','snakeCase']
var subStr = [];
upp = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

low = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
// Converting Cases
function convertCase(stringValue, filterCase) {
  switch (filterCase) {
    case "camelCase": {
      var newString = "";
      subStr = subString(stringValue, " ");

      for (var i = 0; i < subStr.length; i++) {
        if (i == 0) {
          newString += toLowerCase(subStr[i]);
        } else {
          upper = toUpperCase(subStr[i][0]);
          newString += replace(subStr[i], upper);
        }
      }
      return newString;
    }

    case "snakeCase": {
      var newString = "";
      subStr = subString(stringValue, " ");
      for (i = 0; i < subStr.length; i++) {
        if (i == 0) {
          newString += subStr[i];
        } else {
          newString += `-${subStr[i]}`;
        }
      }
      return newString;
    }
    case "hypenCase": {
      var newString = "";
      subStr = subString(stringValue, " ");
      for (i = 0; i < subStr.length; i++) {
        if (i == 0) {
          newString += subStr[i];
        } else {
          newString += `_${subStr[i]}`;
        }
      }
      return newString;
    }
  }
}

console.log(convertCase(toLowerCase(stringValue), filterCase));

// Split string
function subString(array, index) {
  var subStr = [];
  var helper = "";
  for (var i = 0; i < array.length; i++) {
    if (array[i] != index) {
      helper += array[i];
    } else {
      subStr.push(helper);
      helper = "";
    }
  }
  subStr.push(helper);
  return subStr;
}

// IndexOF
function indexOf(args, value) {
  for (i = 0; i < args.length; i++) {
    if (value == args[i]) {
      return i;
    }
  }
  return -1;
}

// String to Array
function split(string) {
  var array = [];
  for (var i = 0; i < string.length; i++) {
    array.push(string[i]);
  }
  return array;
}

// toLowerCase
function toLowerCase(string) {
  string = split(string);
  for (var i = 0; i < string.length; i++) {
    for (j = 0; j < upp.length; j++) {
      if (string[i] == upp[j]) {
        string[i] = low[j];
      }
    }
  }
  return combineArray(string);
}

// toUpperCase
function toUpperCase(string) {
  string = split(string);
  for (var i = 0; i < string.length; i++) {
    for (j = 0; j < low.length; j++) {
      if (string[i] == low[j]) {
        string[i] = upp[j];
      }
    }
  }
  return combineArray(string);
}

// Array to String
function combineArray(array) {
  var string = "";
  for (var i = 0; i < array.length; i++) {
    string += array[i];
  }
  return string;
}

// replace
function replace(string, upper) {
  var arr = split(string);
  arr[0] = upper;
  return combineArray(arr);
}
