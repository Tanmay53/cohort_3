var str  = 'abcddcba'

function palindrome(str){

    var l = Math.floor(str.length/2)
    var forward = ''
    var backward = ''

    for(i=0;i<=l;i++){
    
        if( str.length%2 == 0 && i == l ){
            break;
        }
        forward+=str[i]
        
    }
    // console.log(forward)

    for(i=(str.length-1);i>=l;i--){
        
        backward+=str[i]
        
    }
    // console.log(backward)

    if( forward == backward ){

        console.log(str,' is a palindrome')

    }
    else{

        console.log(str,' is not a palindrome')

    }

}

palindrome(str);