var arr=[1,2,3,8,7,6]

var num=1
var value=arr.map(function(_num,_index,_arr){
        if(_arr[_index-1]>_arr[_index])
        return -1
        else 
        return 1

})
console.log(value)