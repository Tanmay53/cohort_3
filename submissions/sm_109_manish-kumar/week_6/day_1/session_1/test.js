var arr=[1,2,3,4,5]
 min=3

arr[0]=min+arr[0]
min=arr[0]-min
arr[0]=arr[0]-min
console.log(arr,min)