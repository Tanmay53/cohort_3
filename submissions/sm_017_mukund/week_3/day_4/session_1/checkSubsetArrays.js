// considering the elements are not repeated in array

var arrayOne=[1,2,'a']                      // first array
var arrayTwo=[1,2,3,'a','s','p']            // second array
var z=1


// function to find whether first array is subset of second array

function subsetArray(x,y){
    lenOne=x.length
    lenTwo=y.length
    

    if(lenOne<=lenTwo){
        for(i=0;i<lenOne;i++){
            var count=lenTwo
            for(j=0;j<lenTwo;j++){
                if( y[j] !== x[i]){
                    count--
                    
                    if(count==0){
                        z=count
                        
                    }
                }
            }
        }
        if(z>0){
            console.log('First array is a subset of second array')
        }
        else{
            console.log('First array is not a subset of second array')
        }
    }
    else{
        console.log('First array is not a subset of second array')
    }
    
}

subsetArray(arrayOne,arrayTwo)              // function call