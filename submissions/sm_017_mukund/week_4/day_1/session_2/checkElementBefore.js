var arr=[1,2,3,2,1,5,3]

var newArr = arr.map( function(i,index) {
    z=arr[index-1]
    if ( i < z ){
        return -1;
    }
    else{
        return 1;
    }
})

console.log(newArr)