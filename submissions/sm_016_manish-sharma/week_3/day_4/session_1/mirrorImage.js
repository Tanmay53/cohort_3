function mirrorImage(input){
   var output=''
   arr1=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
   arr2=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']


   for(i=0;i<input.length;i++){                      
        for(j=0;j<arr1.length;j++){                   //checking for input element in array 1
           if (input[i]===arr1[j]){
               c=(Number((arr1.length-1)-j))
               output += arr1[c]                      //pushing the mirror image element into output string
           }
           else if (input[i]===arr2[j]){              //checking for input element in array 2
            c=(Number((arr2.length-1)-j))
            output += arr2[c]                        ////pushing the mirror image element into output string
           }
        }
    }
    console.log(output)
}

mirrorImage('AyzB')