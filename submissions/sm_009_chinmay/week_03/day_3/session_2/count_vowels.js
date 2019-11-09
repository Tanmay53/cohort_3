// Print the count of all the vowels in the given string

function countOfVowels(string) {
 var vowelsCount = 0
 string = string.toLowerCase()

 for (i = 0; i < string.length; i++) {

  if (string.charAt(i) == "a") {
   vowelsCount += 1
  }
  else if (string.charAt(i) == "e") {
   vowelsCount += 1
  }
  else if (string.charAt(i) == "i") {
   vowelsCount += 1
  }
  else if (string.charAt(i) == "o") {
   vowelsCount += 1
  }
  else if (string.charAt(i) == "u") {
   vowelsCount += 1
  }

 }
 console.log(vowelsCount)
}


countOfVowels("AEIOUaeiou")
//countOfVowels("tfdasd123123sdascdAASA")
//countOfVowels("tfdasd123123sdascdAASA")