array=[2,3,4,3,5,6,2,1,9,2]
target=3;
function arrayEqualTo(arr, val){
    array= arr.filter(function(element){
        return element != val
    }).map(function(element){
        return element * element;
    });
    console.log(array)
}
arrayEqualTo(array,target);