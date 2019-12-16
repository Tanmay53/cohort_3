var array=[1,3,5,7,3,9,'d','e','f','d','g']         //  array
var noDuplicate=[]                              // new array to store removing duplicates

// function for removing duplicates

function rmDuplicates(x){
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


console.log(rmDuplicates(array))        // function calling

