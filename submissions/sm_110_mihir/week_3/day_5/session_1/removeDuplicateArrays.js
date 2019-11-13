// remove duplicates using array
function unique(arr){
    for(var i=0;i<arr.length-1;i++){
        // looking for repetitions of each number
        for(j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j])
                arr[j]=null
        }
    }
    // filtering out null
    var result=[],index=0
    for(i=0;i<arr.length;i++)
        if(arr[i]!=null)
            result[index++]=arr[i]
    return result
}

console.log(unique([1,2,2,4,7,2,7,1]))

