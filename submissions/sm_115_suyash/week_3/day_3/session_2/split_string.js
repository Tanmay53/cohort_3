function splitChar(str, char) {
  var arr = [];
  var hlpStr = ''
  for (var i = 0; i < str.length; i++) {
    if (str[i] == char) {
      arr.push(hlpStr)
      hlpStr= ''
    } else {
      hlpStr += str[i]
    }
  }
  arr.push(hlpStr)
  return arr
}
var str = `h\
e
l
l
k
hy
o`

console.log(splitChar(str, "\n"))