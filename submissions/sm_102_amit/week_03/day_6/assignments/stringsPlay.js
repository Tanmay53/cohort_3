// write a function to convert a string into camel case, snake case, hypencase
function convertCase(string) {
  // split the string using space as seprator
  splitted_string = splitString(string, " ");
  camel_case = camelCase(splitted_string);
  snake_case = snakeCase(splitted_string);
  hypen_case = hypenCase(splitted_string);
  return (
    "Camel Case: " +
    camel_case +
    "\nSnake Case: " +
    snake_case +
    "\nHypen Case: " +
    hypen_case
  );
}

// function to covert in camelCase
function camelCase(array) {
  var result = "";
  for (var i = 0; i < array.length; i++) {
    if (i == 0) {
      lowercase_string = lowerCase(array[i], uppercase_arr, lowercase_arr);
      result += joinChar(lowercase_string);
    } else {
      lowercase_string = lowerCase(array[i], uppercase_arr, lowercase_arr);
      uppercase_string = upperCase(
        lowercase_string,
        uppercase_arr,
        lowercase_arr
      );
      result += joinChar(uppercase_string);
    }
  }
  return result;
}

// function to covert in snake case
function snakeCase(array) {
  var result = "";
  joined_string = joinArray(array, "_");
  lowercase_string = lowerCase(joined_string, uppercase_arr, lowercase_arr);
  result += joinChar(lowercase_string);
  return result;
}
// function to covert in hypen case
function hypenCase(array) {
  var result = "";
  joined_string = joinArray(array, "-");
  lowercase_string = lowerCase(joined_string, uppercase_arr, lowercase_arr);
  result += joinChar(lowercase_string);
  return result;
}
// input
var string = "AmiT KumaR SingH";
uppercase_arr = [
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
lowercase_arr = [
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
// output
console.log(convertCase(string));

// function to convert string to lowercase
function lowerCase(string, uppercase_arr, lowercase_arr) {
  string = splitCharacter(string);
  for (i = 0; i < string.length; i++) {
    for (j = 0; j < uppercase_arr.length; j++) {
      if (uppercase_arr[j] == string[i]) {
        string[i] = lowercase_arr[j];
        break;
      }
    }
  }
  return string;
}
// function to convert string to lowercase
function upperCase(string, uppercase_arr, lowercase_arr) {
  string = splitCharacter(string);
  for (j = 0; j < uppercase_arr.length; j++) {
    if (lowercase_arr[j] == string[0]) {
      string[0] = uppercase_arr[j];
      break;
    }
  }

  return string;
}
// split character function
function splitCharacter(string) {
  var array = [];
  for (var i = 0; i < string.length; i++) {
    array.push(string[i]);
  }
  return array;
}
// split string function
function splitString(string, seprator) {
  var subString = "";
  var array = [];
  var index = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] != seprator) {
      subString += string[i];
    } else {
      if (subString != "") {
        array[index] = subString;
        index++;
      }
      subString = "";
    }
  }
  if (subString != "") {
    array[index] = subString;
  }
  return array;
}
// join string function
function joinChar(arr) {
  var string = "";
  for (var i = 0; i < arr.length; i++) {
    string += arr[i];
  }
  return string;
}
// join array
function joinArray(arr, seprator) {
  var string = "";
  for (var i = 0; i < arr.length; i++) {
    if (i != arr.length - 1) {
      string += arr[i] + seprator;
    } else {
      string += arr[i];
    }
  }
  return string;
}
