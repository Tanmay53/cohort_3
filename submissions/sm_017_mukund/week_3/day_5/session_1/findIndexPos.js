var arr=[1,4,6,'r','h']     // given array
var val=1                   // given value

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