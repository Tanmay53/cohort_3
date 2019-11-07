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
        for(var i = length; i >= 0; i--){
            inputArray[inputArray.length]= inputArray[i];    //moving the contents of array starting from the end ---> to the the end of the original array
        }

        //loop to remove the original contents of the array
        for(var i = 0; i < length; i++){
            inputArray.shift()          
        }
    }
    
    outputString = inputArray.join("")          //join all elements of array to form a string
    return outputString                         //return the output string
}

var reverseString = reverseThis('masai school')     //invoking the function with the string and getting the ouput in reverseString variable
console.log(reverseString)