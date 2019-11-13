var A=[1,3,5,7,'f','h']         // array one
var B=[2,4,6,8,'e','u']       // array two

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

// function to return object of array one and array two combined (unique elements only)
function object(x,y){
    var obj = {};
    for(i=0;i<x.length;i++){
        obj[x[i]]=0
    }
    for(i=0;i<y.length;i++){
        obj[y[i]]=0
    }

    return obj;
}

// function to find disjoint array or not
function disjointArray(x,y){
        
    first=objectOne(x)                       
    second=objectTwo(y)
    combined=object(x,y)

    lFirst=Object.keys(first).length
    lSecond=Object.keys(second).length
    lCombined=Object.keys(combined).length

    if(lCombined==lFirst+lSecond){
        return true;
    }
    else{
        return false;
    }
   
    
    
    
    
}

console.log(disjointArray(A,B))