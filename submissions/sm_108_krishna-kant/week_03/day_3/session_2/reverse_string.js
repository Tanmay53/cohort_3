var sampleString = "Krishna Kant Sharma";
var reverse = "";

function reverseString(args) {
  for (i = args.length - 1; i >= 0; i--) {
    reverse += args[i];
  }
  console.log(reverse);
}

reverseString(sampleString);
