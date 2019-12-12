var arr = [6,2,9,4,3,2,5]
var processed = arr.map(function(currentElement,currentIndex,arr){
    if(arr[currentIndex-1]>arr[currentIndex]){    
        return -1
    }
    else{
        return 1
    }
})
console.log(processed)