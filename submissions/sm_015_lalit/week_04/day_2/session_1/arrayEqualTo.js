// function arrayEqualto(arr,target){
//     arrx=[]
//    len=arr.length
//    for (i=0;i<len;i++){
//        if (arr[i]!=target){
//            arr[i]=arr[i]*arr[i]
//            arrx.push(arr[i])
//        }
//    }
//    console.log(arrx)
// }


function arrayEqualto(arr,target){
  var result = arr.filter((x)=>x!=target).map((e)=>e*e)
  console.log(result)
}

arrayEqualto([2,5,4,6,5,1],4)