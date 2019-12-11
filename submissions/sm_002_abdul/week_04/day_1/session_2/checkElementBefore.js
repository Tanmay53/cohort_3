const arr=[1,2,3,2,5];

const mappedArray=arr.map(function(currentValue,currentIndex,arr){
    if (arr[currentIndex-1]>currentValue){
        return -1;
    }
    else{
        return 1;
    }
})

console.log(mappedArray)