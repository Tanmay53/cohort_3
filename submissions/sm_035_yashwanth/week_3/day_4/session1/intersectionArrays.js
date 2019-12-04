 var arr1 = [1,2,3,3,4]
 var arr2 = [3,4,5]
 var inter = []
  for(i=0;i<arr1.length;i++){
    for(j=0;j<arr2.length;j++){
      if(arr1[i] === arr2[j]){
    flag = true
        for(k=0;k<inter.length;k++){
           if(arr1[i] === inter[k]){
               flag=false
               break;
           } 
        }
          if(flag == true){
            inter.push(arr1[i]) 
          }

      }
    }  
}
console.log(inter)



