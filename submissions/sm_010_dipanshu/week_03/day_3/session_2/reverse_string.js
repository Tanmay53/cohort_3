//function to reverse a string. It takes a string as an argument.
function reverseThis(inputString){

    //checking if an empty string was passed
    if(inputString.length == 0){
        return 'Please provide a valid string.'
    }
    else{

        var inputArray = inputString.split('')      //convert string to array

        var length = inputArray.length              //getting the length of original array

        //looping from the end of the array to the beginning
        for(var i = 0; i <= Math.floor((length-1)/2); i++){
            temp = inputArray[i]
            inputArray[i] = inputArray[length-1-i]
            inputArray[length-1-i] = temp
        }
    }
    
    outputString = inputArray.join("")          //join all elements of array to form a string
    return outputString                         //return the output string
}

var reverseString = reverseThis('masai school')     //invoking the function with the string and getting the ouput in reverseString variable
console.log(reverseString)