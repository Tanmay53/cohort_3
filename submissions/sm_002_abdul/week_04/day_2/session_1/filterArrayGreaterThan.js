function filterfunc(arr,target){
    const output=arr.filter(function(val){
        return val>=target;
    })
    return output;
}

console.log(filterfunc([1,8,7,9,15,20,25,22,23],9))