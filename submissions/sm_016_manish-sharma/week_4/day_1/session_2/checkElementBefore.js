function checkElementBefore(array){
    var newArray = array.map(function(element,n){
        if (array[n]<array[n-1]){
            return -1
        }
        else{
            return 1
        }
    })
    console.log(newArray)
}

checkElementBefore([1,2,4,3,6])