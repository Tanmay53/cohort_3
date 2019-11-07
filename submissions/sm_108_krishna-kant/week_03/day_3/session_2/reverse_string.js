var sampleString = "Amit Kumar";

function reverseString(args) {
  sampleString = "";
  for (i = args.length - 1; i >= 0; i--) {
    sampleString += args[i];
  }
  console.log(sampleString);
}

reverseString(sampleString);
