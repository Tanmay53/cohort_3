array=[2,4,3,5,7,8,4,5,10];
target=3;

function reduceSum(arr,val){

    array=arr.filter(function(element){
        return element > val;
    }).reduce(function(a,c){
        return a + c
    });
console.log(array);
}
reduceSum(array,target);