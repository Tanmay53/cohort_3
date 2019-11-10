var arrayOne=[1,'r','v','k',2,8,0,'s',1,6,'g']      // first array
var arrayTwo=[6,'k','a','g',8,1,'z',1,1]            // second array
var intersect=[]                                    // intersection of two arrays will be stored in this array
var longArray=[]                                    // the longest array of the two arrays if equal than first array
var shortArray=[]                                   // the shortest array of the two arrays if equal than second array


// function to find the intersection of two array

function intersectArray(x,y){
    // intersect[0]=x[0]
    lenOne=x.length
    lenTwo=y.length

    long=( lenOne>=lenTwo ? lenOne : lenTwo )
    short=( lenTwo<=lenOne ? lenTwo : lenOne )
    longArray=( lenOne>=lenTwo ? x : y )
    shortArray=( lenTwo<=lenOne ? y : x )

    for(i=0;i<long;i++){
        count=0
        for(j=0;j<short;j++){
            if ( longArray[i] === shortArray[j] )
                count++
        }
        if (count>0){
            if (intersect.indexOf(longArray[i]) == -1 )
            intersect.push(longArray[i])
        }
    }
    console.log(intersect)
}

intersectArray(arrayOne,arrayTwo)       // function call


