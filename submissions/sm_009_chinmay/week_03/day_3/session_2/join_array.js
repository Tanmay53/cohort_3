// Given an array and a character, generate a string joining each item in the array with the given character (NOTE: You can't use inbuilt methods)

function joinArray(array, character) {

 var string  = ""

 for(i=0; i< array.length; i++){

  string = string + array[i] + character

 }
 console.log(string)
}

joinArray(["a", "b", "c", "d"], "/")
//joinArray([1,2,33,11,1111], "a")