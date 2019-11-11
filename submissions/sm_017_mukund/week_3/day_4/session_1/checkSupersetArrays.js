// considering that array have no repeated elements

var arrayOne=[1,2,3,'w','b']                // first array
var arrayTwo=[2,'b',3]                      // second array
var z=1

// function to find if first array is superset of second array

function supersetArray(x,y){
    lenOne=x.length
    lenTwo=y.length

    if(lenOne>=lenTwo){
        for(i=0;i<lenTwo;i++){
            count=lenOne
            for(j=0;j<lenOne;j++){
                if( y[i] !== x[j] ){
                    count--
                    if(count==0){
                        z=count
                    }
                }
            }
        }
        if(z>0){
            console.log('First array is superset of Second array')
        }
        else{
            console.log('First array is not superset of Second array')
        }
    }
    else{
        console.log('First array is not superset of Second array')
    }

}

supersetArray(arrayOne,arrayTwo)        // function call