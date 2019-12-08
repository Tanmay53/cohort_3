var stringDelimiter = function (sampleInput, delimiter) {
  var stringArray = [''];
  var j = 0;

  for (var i = 0; i < sampleInput.length; i++) {
    if (sampleInput.charAt(i) == delimiter) {
      j++;
      stringArray.push('');
    } else {
      stringArray[j] += sampleInput.charAt(i);
    }
  }
  return stringArray;
}
var str = `etteff`

console.log(stringDelimiter(str, ''))