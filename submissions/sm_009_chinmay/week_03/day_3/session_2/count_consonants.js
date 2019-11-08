// Print the count of all the consonants in the given string

function countOfConsonants(string) {
 var consonantsCount = string.length
 // console.log(consonantsCount)
 string =  string.toLowerCase()
 for(i=0; i<string.length; i++){

  if(string.charAt(i)== "a"){
   consonantsCount -= 1
  }
  else if(string.charAt(i)=="e"){
   consonantsCount -= 1
  }
  else if(string.charAt(i)=="i"){
   consonantsCount -= 1
  }
  else if(string.charAt(i)=="o"){
   consonantsCount -= 1
  }
  else if(string.charAt(i)=="u"){
   consonantsCount -= 1
  }

 }
 console.log(consonantsCount)
}

countOfConsonants("Consonants")