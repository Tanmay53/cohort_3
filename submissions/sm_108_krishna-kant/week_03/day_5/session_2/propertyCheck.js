var testCase = [
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "_",
  "-",
  "@",
  "."
];
// Initialization of Object
var user = {
  name: "Krishna Kant Sharma",
  email: "asgaurdnation@gmail.com",
  password: "Cka0xns9an"
};

// CheckEmailValidation
function propertyCheck(obj) {
  for (key in obj) {
    if (key == "email") {
      return hasEmail(user.email);
    }
  }
}

// Calling Function
console.log(propertyCheck(user));

function hasEmail(email) {
  switch (1) {
    case 1: {
      // Test Case 1 : masai.school.com [@ is not present]
      for (var i = 0; i < email.length; i++) {
        if (!email[i] == "@") {
          return false;
          break;
        }
      }
    }
    case 2: {
      // Test Case 2 :  masai@.com.my [ tld (Top Level domain) can not start with dot "." ]
      subEmail = subString(email, "@");
      if (subEmail[1][0] == ".") {
        return false;
        break;
      }
    }
    case 3: {
      // Test Case 3 : @masai.school.net [ No character before @ ]
      subEmail = subString(email, "@");
      if (subEmail[0][0] == "@") {
        return false;
        break;
      }
    }
    case 4: {
      // Test Case 4 : .name@masaischool.org [ an email should not be start with "." ]
      subEmail = subString(email, "@");
      if (subEmail[0][0] == ".") {
        return false;
        break;
      }
    }
    case 5: {
      // Test case 5 : name..1234@yahoo.com [double dots are not allowed]
      subEmail = subString(email, "@");
      var count = 0;
      for (var i = 0; i < subEmail[0].length; i++) {
        if (subEmail[0][i] == ".") {
          count++;
        }
      }
      if (count > 1) {
        return false;
        break;
      }
    }
    case 6: {
      //Test Case 6 :  Must have single @
      subEmail = subString(email, "@");
      for (var i = 0; i < subEmail[0].length; i++) {
        if (subEmail[0][i] == "@") {
          return false;
          break;
        }
      }
    }
  }
  return true;
}

// Split string
function subString(array, index) {
  var subStr = ["", ""];
  for (var i = 0; i < array.length; i++) {
    if (array[i] == index) {
      for (var j = 0; j < i; j++) {
        subStr[0] += array[j];
      }
      for (var j = i + 1; j < array.length; j++) {
        subStr[1] += array[j];
      }
    }
  }
  return subStr;
}
