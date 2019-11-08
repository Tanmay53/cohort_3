var string='pZbaYjo'        // given string
var newString=''            // empty string
var capital=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var small=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'] 

// function to find mirror image of given string

function mirrorImage(string){
    for(i=0;i<string.length;i++){
        z=0
        if( capital.indexOf(string[i]) > -1 ){
            z=capital.indexOf(string[i])
            newString+=(capital[25-z])
        }
        else if( small.indexOf(string[i]) > -1 ){
            z=small.indexOf(string[i])
            newString+=(small[25-z])
        }    
        
    }

    return newString;
}


console.log(mirrorImage(string))        // function call




