// Given a string and a split character generate a array of strings from the given string, splitting at the occurence of each split character (NOTE: You can't use inbuilt methods)

function splitString(string, splitCharacter) {
 var stringAfterSplit = ""
 var arrayAfterSplit = []
 // console.log(string.length)
 for (i = 0; i < string.length; i++) {
  if (string.charAt(i) !== splitCharacter) {
   stringAfterSplit += string.charAt(i)
  }
  else if (string.charAt(i) == splitCharacter) {
   arrayAfterSplit.push(stringAfterSplit)
   stringAfterSplit = ""
  }
 }

 arrayAfterSplit.push(stringAfterSplit)

 console.log(arrayAfterSplit)
}

splitString("Oh brave new world that has such people in it.", " ")
// splitString("a/dsds/12/dfdfs/asdasd/a/a/1/1/1")
// splitString("a/dsds/12/dfdfs/asdasd/a/a/1/1/1", "/")
