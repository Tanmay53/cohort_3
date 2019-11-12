array=[2,4,6,8,3,2,11,10,5];
target=5;
function greaterThan(arr,val){
    array=arr.filter(function(element){
        return element < val;
    });
    console.log(array);
}
greaterThan(array,target);