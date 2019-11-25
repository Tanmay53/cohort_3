function checkElementBefore(array){

    res = array.map(function(e,i,a){
        if(a[i-1]>a[i]){
            return -1
        }
        else{
            return 1
        }
    })

    return res
}

console.log(checkElementBefore([1,2,3,4,5]))
console.log(checkElementBefore([5,4,3,2,1]))
console.log(checkElementBefore([1,2,4,3,5]))
console.log(checkElementBefore([1,1,1,1,1]))

