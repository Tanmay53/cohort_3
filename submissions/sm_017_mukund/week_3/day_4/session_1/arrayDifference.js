var arrayOne=['d','f',5,6,7,'z']            // first array whose difference has to be found out 
var arrayTwo=[5,'f',1,3,4,5,6,7,8]          // second array
var difference=[]                           // this array stores the value of different element in first array


// function to find the different values in first array when compared to second array   

function arrayDifference(x,y){
    
    for(i=0;i<x.length;i++){
        count=y.length
        for(j=0;j<y.length;j++){
            if ( x[i] !== y[j] )
                count--
        }
        if ( count == 0 ){
            difference.push(x[i])
        }
    }
    // console.log(difference)

    return difference;
}

console.log(arrayDifference(arrayOne,arrayTwo))      // function call