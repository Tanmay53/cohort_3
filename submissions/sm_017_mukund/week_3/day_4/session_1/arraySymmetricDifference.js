var arrayOne=['e','g','r',88,33,33]             // first array
var arrayTwo=[33,'r','p']                       // second array
var symmetry=[]                                 // array to store the symmetric difference

// function to find symmetric difference of two array

function symmetricDifference(x,y){
    for(i=0;i<x.length;i++){
        if ( y.indexOf(x[i]) == -1 ){
            symmetry.push(x[i])
        }
    }
    for(i=0;i<y.length;i++){
        if ( x.indexOf(y[i]) == -1 ){
            symmetry.push(y[i])
        }
    }

    return symmetry;
}


console.log(symmetricDifference(arrayOne,arrayTwo))             // function call