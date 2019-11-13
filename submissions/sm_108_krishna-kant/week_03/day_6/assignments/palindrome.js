// Initializing String
var givenString = "taco cat";

// Check weather string is palindrome
function checkPalindrome(string) {
  givenString = "";
  string = combineArray(subString(string, " "));
  console.log(string);
  for (i = string.length - 1; i >= 0; i--) {
    givenString += string[i];
  }
  if (string == givenString) {
    return "It is a Palindrome";
  } else {
    return "String is not a palindrome";
  }
}

// calling function
console.log(checkPalindrome(givenString));

// For spliting string if contain spaces
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

// converting array passed by substr
function combineArray(array) {
  var string = "";
  for (var i = 0; i < array.length; i++) {
    string += array[i];
  }
  return string;
}
