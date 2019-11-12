arr=[1,2,3,4,5,6,10];
target=5;

function returnMultiplier(arr,val){

    array=arr.map(function (element){
        return element * val;
    });
    console.log(array);
}
returnMultiplier(arr,target);