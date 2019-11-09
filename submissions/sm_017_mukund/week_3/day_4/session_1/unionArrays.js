var arrayOne=[1,2,3,'p','e',6,0]        // array one
var arrayTwo=[3,7,'f',3,'e',9,6,4]          // array two
var arr=[]                              // empty array to store the value after concatinating two arrays 
var union=[]                            // array to store union of two array

// function to find the union of two array

function unionArray(x,y){
    for(i=0;i<x.length;i++){
        arr.push(x[i])
    }
    for(i=0;i<y.length;i++){
        arr.push(y[i])
    }
    // union[0]=arr[0]
    
    for(i=0;i<arr.length;i++){
        count=0
        for(j=0;j<union.length;j++){
            if ( union[j] == arr[i] ){
                count++
                    
            }
        }
        if (count==0){
            union.push(arr[i])
        }
        
        
    }
    console.log(union)
}

unionArray(arrayOne,arrayTwo)           // function call