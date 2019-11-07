var string = "Hello Krishna Kant Sharma";
var charArray = [];
function splitString(args) {
  for (i = 0; i < args.length; i++) {
    charArray[i] = args[i];
  }
  return charArray;
}

console.log(splitString(string));
