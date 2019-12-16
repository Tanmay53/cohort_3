var array=[1,3,5,7,3,9,'d','e','f','d','g']  //given array

var obj ={ };    //object to store duplicates

//function to remove duplicate

function rmDuplicates(x){
    for(i=0;i<x.length;i++){
        obj[x[i]]=1
     }

    return Object.keys(obj);
}
console.log(rmDuplicates(array))    //function calling