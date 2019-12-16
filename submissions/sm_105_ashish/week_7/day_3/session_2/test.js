

var arr=[1,2,3,4,5,6,4,5,6]
var num=9

var arr1=[]
var index=0
for(var i=arr.length-1;i>=0;i--){
    
    if(arr[i]!==5){
    index=i
     arr1.push(arr[i])
     arr1.push(num)

    }
    else{
        break
    }

}
for(var i=index;i>=0;i--){
    arr1.push(arr[i])
}
arr1=arr1.reverse()

console.log(arr1)