var arr=['I','am','really','awesome']       // given array
var string=''                               // empty string
var splitChar='-'                           // given character to join after each array element in a string

// function to join given character between array element to form a string

function join_array(arr){
    for(i=0;i<arr.length;i++){
        if(i!=arr.length-1)
            string=string+arr[i]+'-'
        else
            string=string+arr[i]    
    }
    console.log(string)
}

join_array(arr)         // function call