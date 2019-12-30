function myString(string) {
  var len = string.length;
  for (var i = 0; len > i; i++) {
    console.log(string[len - 1 - i]);
  }
}
myString("Hello world");
