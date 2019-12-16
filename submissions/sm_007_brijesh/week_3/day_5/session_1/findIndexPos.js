var arr=[1,3,5,7,'p','q','r','p']     // given array
var val='p'                   // given value

// function to find the value in array

function findIndex(arr,value){
    cnt=arr.length
    for(i=0;i<arr.length;i++){
        if( arr[i] === value ){
            index=i
            break;
        }

        cnt--

        if(cnt==0){
            return -1;
        }
    }
    // console.log(index)
    return index;
}

console.log(findIndex(arr,val))     //function call