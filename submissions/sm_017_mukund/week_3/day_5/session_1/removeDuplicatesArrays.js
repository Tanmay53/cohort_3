var array=[1,2,3,4,2,4,'q','t','f','q']         // given array
var noDuplicate=[]                              // new array after removing duplicates 

// function to remove duplicates from array

function removeDuplicates(x){
    for(i=0;i<x.length;i++){
        count=0
        for(j=0;j<noDuplicate.length;j++){
            if( noDuplicate[j] === x[i]){
                count++
            }

        }
        if ( count==0){
            noDuplicate.push(x[i])
        }
    }

    return noDuplicate;
}


console.log(removeDuplicates(array))        // function call