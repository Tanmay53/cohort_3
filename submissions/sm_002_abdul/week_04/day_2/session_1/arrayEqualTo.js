function arrFilter(arr,target){
    const output=arr.filter(function(element,index){
        return element!=target;
    }).map(function(val){
        return val**2;
    })
    return output;
}

console.log(arrFilter([1,2,3,4,5,4],4));