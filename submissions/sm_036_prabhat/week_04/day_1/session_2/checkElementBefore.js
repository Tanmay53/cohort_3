function checkElementBefore (arr) {
    var eleBefore = arr.map(function(element, index, array){
        if(array[index-1] > element)
        return -1
        else
        return 1
    })
    return eleBefore;
}

var obj = {
    arr : [5,8,9,3,25,552,2,58]
}

console.log(checkElementBefore(obj.arr))