// to split charcter and return as array
function split_char(str){
    var arr=[]
    for(var i=0;i<str.length;i++)
        arr[i]=str[i]
    return arr
}

// to reverse a string
function reverse_string(original){

    var temp
    console.log('Original:', original)
    //string to array
    original=split_char(original)
    // iterating half way through string and swapping extremes
    for(var i=0;i<Math.floor(original.length/2);i++){
        //save front value
        temp=original[i]
        //replace front value with rear value
        original[i]=original[original.length-1-i]
        // replace rear value with prev front value stored in temp
        original[original.length-1-i]=temp
    }
    console.log('Reversed:',original.join(''))
}

reverse_string('Masai School')
