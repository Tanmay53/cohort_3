var items = ["hello", "i", 27, "krishna", "", "jdfj", 2];
var character = "-";
var joinedString = "";
function joinArray(arg1, arg2) {
  for (i = 0; i < arg1.length; i++) {
    if (i == arg1.length - 1) joinedString += arg1[i];
    else joinedString += arg1[i] + arg2;
  }
  console.log(joinedString);
}

joinArray(items, character);
