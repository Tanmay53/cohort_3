var string='I am so awesome'        // given string
var arr=['']                        // empty array

// function to split each character in a string and store into an array

function split_char(string){
    for(i=0;i<string.length;i++){
        arr[i]=string[i]
    }
    console.log(arr)
}

split_char(string)      // function call