var element = "X"

givenArray = ["masai", "school", ".com"]
var str = ''
// function defintion of joining elements in array and character and return a string
function joinArrayElement(givenArray, element) {
    for (var i = 0; i < givenArray.length; i++) {
        str+= givenArray[i] + element;
    }
    console.log(str) 
}
//calling the function
joinArrayElement(givenArray,element)