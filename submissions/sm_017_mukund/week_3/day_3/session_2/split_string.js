var string='__split__string_ghj_'   // given string
var newString=''                    // empty string
var splitChar='_'                   // given split character
var output=[]                       // empty array
var arrA=[]                         // empty array two
var finalOutput=[]                  // empty array three


// function to remove the split character from string and form array 

function split_string(string){
    for(i=0;i<string.length;i++){
        if (string[i]==splitChar){
            output.push(newString)
            newString=''
        }    
        else if (string[i]!=splitChar)
            newString=newString+string[i]
            if (i==(string.length-1))
                output.push(newString)    
    }
    
    for(i=0;i<output.length;i++){
        if(output[i]!=''){
            arrA.push(i)
        }
    }

    for(i=0;i<arrA.length;i++){
        finalOutput[i]=output[(arrA[i])]
    }
    
    
    console.log(finalOutput)
}

split_string(string)            // function call