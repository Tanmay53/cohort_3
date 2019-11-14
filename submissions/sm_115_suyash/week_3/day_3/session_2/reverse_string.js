function reverseString(name) {
  var splitString = name.split("");
  var reverseArray = splitString.reverse("");
  // console.log(reverseArray);
  var reverseName = reverseArray.join('');
  return reverseName;
}
console.log(reverseString("Masai"));