
// function fib(N){
//     if(N==2){
//         return 1
//     }
//     else if(N==1){
//         return 1
//     }
//     else if(N==0){
//         return 0
//     }
//     else{
//         result=fib(N-1)+fib(N-2)
//         return result
//     }
// }

// console.log(fib(3))



var a=[39,27,11,4,24,32,32,1]

// function sumAll(arr,i,result){
    
//     if(i<=0){
//       result.push(-1)
//         return result
//     }
//     if(arr[i]>arr[i+1]){
//         result.push(arr[i-1])
//     }
//     else{
//         result.push(-1)
//     }
//     //arr[i]=arr[i]*arr[i]
//        return sumAll(arr,i-1,result)


// }
// var b = []
// sumAll(a,7,b)
// console.log(b)


//var arr=[2,9,6,4]

function mergeSort(org){
    if (org.length == 1){
    return org;
    }
    let mid = Math.floor(org.length/2),
    left = org.slice(0,mid),
    right = org.slice(mid);
    
    return merge(mergeSort(left),mergeSort(right));
    }
    
    function merge(left, right){
    let l = 0,
    r = 0,
    result = [];
   while(l < left.length && r < right.length){
    if(left[l] > right[r]){
    result.push(right[r]);
    r++;
    }else{
    result.push(left[l]);
    l++;
    }
    }
    return result.concat(left.slice(l),right.slice(r));
    }
    
    var org = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
    console.log(mergeSort(org));