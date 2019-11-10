// Checks for alphanumeric and "-_." characters
function validChar(word) {
  var allowed = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-.";
  var pass = false;
  
  for(var i = 0; i < word.length; i++) {
    for(var j = 0; j < allowed.length; j++) {
      if(word[i] == allowed[j]) {
        pass = true;
        break;
      }
    }
    if(pass == false) {
      return false;
    }
    pass = false;
  }
  
  return true;
}

// checks for consecutive dots
function doubleDot(word) {
  for(var i = 0; i < word.length; i++) {
    if(i != (word.length-1) && word[i] === "." && word[i+1] === ".") {
      return true;
    }
  }
  
  return false;
}

function validTld(dname) {
  var isValid = false;
  var dnameLen = dname.length;
  var dnameSplit = dname.split(".");
  var allowed = ["in", "org", "com"];

  if((dname[0] !== ".") && (dnameSplit.length >= 2)) {
    // Checks for last domain
    for(i = 0; i < allowed.length; i++) {
      if(allowed[i] == dnameSplit[dnameSplit.length-1]) {
        isValid = true;
      }
    }
    if(!isValid) {
      return false;
    }
    if(!validChar(dname)) {
      return false;
    }
    if(doubleDot(dname)) {
      return false;
    }
  } else {
    return false;
  }

  return true;
}

function hasEmail(email) {
  
  if(String(email).indexOf("@") != -1) {
    var splitEmail = String(email).split("@");
    var befStr = splitEmail[0];
    var aftStr = splitEmail[1];
    var befStrLen = befStr.length;
    var aftStrLen = aftStr.length;

    // Checking for string before "@"
    if((befStrLen >= 1) && (befStr[0] !== ".") && (befStr[befStrLen-1] !== ".") && (!doubleDot(befStr))) {
      // Checking for string after "@"
      if(validTld(aftStr)) {

      } else {
        return "Invalid"
      }
      return "Valid";
    } else {
      return "Invalid";
    }
  } else {
    return "Invalid";
  }
}

console.log(hasEmail("aali.ndssharma@st.n..iituniversity.in"));

// TEST CASES
// 1. aalinds.sharma@gmail.com