var arr1=[1,2,3,4,5,1,2,4,3]             //output=[1,2,3,4,5]///////
var arr2=[1,3,2,5,4,6,7,8,1,2]
result=[]
function intersectionarrays(arr1,arr2){
  for(i=0;i<arr1.length;i++){
    flag=true
      for(j=0;j<arr2.length;j++){
        if(arr1[i]==arr2[j]){      ///[1,2,3,4,5,1,2]
          flag=true
            if(flag==true){
              for(k=0;k<result.length;k++){
                if(arr1[i]==result[k]){
                  flag=false
                  break
                }
              }
              if(flag==true){
                result.push(arr1[i])
              }
            }
        }
      }
  }
  return result
}
  console.log(intersectionarrays(arr1,arr2))
