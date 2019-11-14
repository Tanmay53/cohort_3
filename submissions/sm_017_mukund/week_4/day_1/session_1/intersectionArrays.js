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

// function to return intersection of two given array (common elements only)
function intersectionArray(x,y){
    first=objectOne(x)                       
    second=objectTwo(y)
    lFirst=Object.keys(first).length
    lSecond=Object.keys(second).length
    var obj = {};
    for(i=0;i<lFirst;i++){
        obj[x[i]]=0
    }
    for(i=0;i<lSecond;i++){
        obj[y[i]]+=1
    }

    arrObjKey=Object.keys(obj)
    arrObjValue=Object.values(obj)
    lObj=arrObjValue.length
    arrIntersect=[]

    for(i=0;i<lObj;i++){
        if( arrObjValue[i] == 1 ){
            arrIntersect.push(arrObjKey[i])
        }
    }

    return arrIntersect;
}




console.log(intersectionArray(A,B))               // function call