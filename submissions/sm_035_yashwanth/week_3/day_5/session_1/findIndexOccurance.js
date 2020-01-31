var result =[]
var count = 0
function index(arr,element){
    for(i=0;i<arr.length;i++){
   if(arr[i] == element) {
       count++
       result.push(i)
   }
    }
    console.log(result)
}
    index([1,2,3,3,4,5],3)