function mirrorImage(input){

    var alpha1Lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m']
    var alpha2Lower = ['z','y','x','w','v','u','s','t','r','q','p','o','n']

    var alpha1Caps = ['A','B','C','D','E','F','G','H','I','J','K','L','M']
    var alpha2Caps = ['Z','Y','X','W','V','U','S','T','R','Q','P','O','N']

    var temp = []   //temporary array

    for(var i=0; i<input.length;i++){   //looping through the entire input

        searchChar = input[i]   //setting the first element as the search character

        notFound = true //flag for any character if not found in above arrays

        //checking if the element is present in the above defined arrays and pushing the mirror image to the temporary array. 
        for(var j=0;j<alpha1Lower.length;j++){  
            if(searchChar === alpha1Lower[j]){
                temp.push(alpha2Lower[j])
                notFound = false
            }

            else if(searchChar === alpha2Lower[j]){
                temp.push(alpha1Lower[j])
                notFound = false
            }

            else if(searchChar === alpha1Caps[j]){
                temp.push(alpha2Caps[j])
                notFound = false
            }

            //for characters that are not found
            else if(searchChar === alpha2Caps[j]){
                temp.push(alpha1Caps[j])
                notFound = false
            }
        }

        if(notFound){
            temp.push(searchChar)
        }
    }
    
    //creating the output string
    var mirrorString = ''
    for(var i=0;i<temp.length;i++){
        mirrorString += temp[i]
    }

    return mirrorString
}

var output = mirrorImage('A.y1P3-z/B')
console.log(output)