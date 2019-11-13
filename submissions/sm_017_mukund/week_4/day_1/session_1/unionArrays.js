var A=[2,4,6,8,'e','u']                // array one
var B=[4,8,'u','f',0]                  // array two

// function to return object of array one (unique elements only)
function objectOne(x){
    var objOne = {};
    for(i=0;i<x.length;i++){
        objOne[x[i]]=0
    }
   
    return objOne;
}

// function to return object of array two (unique elements only)
function objectTwo(y){
    var objTwo = {};
    for(i=0;i<y.length;i++){
        objTwo[y[i]]=0
    }

    return objTwo;
}

// function to return union of two given array (unique elements only)
function unionArray(x,y){
    var obj = {};
    for(i=0;i<x.length;i++){
        obj[x[i]]=0
    }
    for(i=0;i<y.length;i++){
        obj[y[i]]=0
    }

    return Object.keys(obj);
}




console.log(unionArray(A,B))               // function call