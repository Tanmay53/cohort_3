var arr1 = [1,2,4]
var arr2 = [3,4,5,6]
var diff=[]
var result=[]
 for(i=0;i<arr1.length;i++){
   flag = true
     for(j=0;j<arr2.length;j++){
         if(arr1[i] === arr2[j]){
            flag = false 
            break;
         }
      }
      if (flag == true) {
         diff.push(arr1[i])
     }
 }
 for(i=0;i<diff.length;i++){
   flag = true
  for(j=0;j<result.length;j++){
     if(diff[i] == result[j]){
     flag = false
     break;
     }
  }
  if(flag === true){
    result.push(diff[i]) 
  }
}
console.log(result)





   
             
