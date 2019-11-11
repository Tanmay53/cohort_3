var arrayOne=['1','a',4,'z']        // given array one
var arrayTwo=['b']                // given array two
var count=0

// function to find if given two array are disjoint array

function disjointArrays(x,y){
    lenOne=x.length
    lenTwo=y.length

    for(i=0;i<lenOne;i++){
        for(j=0;j<lenTwo;j++){
            if( x[i] === y[j] ){
                count++
            }
        }
    }

    if(count==0){
        console.log('Given Two arrays are disjoint')
    }
    else{
        console.log('Given Two arrays are not disjoint')
    }
}

disjointArrays(arrayOne,arrayTwo)           // function call