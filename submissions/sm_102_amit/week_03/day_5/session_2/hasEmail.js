var allowed_chars_1 = [
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
  "z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "-",
  "_"
];
var allowed_chars_2 = [
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
function validateEmail(email) {
  if (email[0] == "@" || email[0] == ".") {
    return "Invalid Email!";
  } else {
    email_parts = split(email, "@");
    if (email_parts.length != 2) {
      return "Invalid Email!";
    } else {
      var first_part = email_parts[0];
      var second_part = email_parts[1];
      if (include(first_part, allowed_chars_1) == false) {
        return "Invalid Email!";
      } else {
        email_sub_part = split(second_part, ".");
        if (email_sub_part.length != 2) {
          return "Invalid Email!";
        } else {
          var sub_part_1 = email_sub_part[0];
          var sub_part_2 = email_sub_part[1];
          if (include(sub_part_1, allowed_chars_2) == false) {
            return "Invalid Email!";
          } else {
            if (include(sub_part_2, allowed_chars_2) == false) {
              return "Invalid Email!";
            } else {
              return email;
            }
          }
        }
      }
    }
  }
}

name..1234@yahoo.com
name@.org.org
console.log(validateEmail("masai@.com.my"));

function include(arr_1, arr_2) {
  var count = 0;
  for (var i = 0; i < arr_1.length; i++) {
    for (var j = 0; j < arr_2.length; j++) {
      if (arr_1[i] != arr_2[j]) {
        continue;
      } else {
        count++;
      }
    }
  }
  if (count == arr_1.length) {
    return true;
  } else {
    return false;
  }
}

function split(string, seprator) {
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

// console.log(split("masai@.com@my", "@"));
