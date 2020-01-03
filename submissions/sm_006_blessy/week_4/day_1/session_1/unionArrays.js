function unionArrays(arr1,arr2){
    var obj = {}
    
    for(var i = arr1.length-1;i>=0; i--){
        obj[arr1[i]] = arr1[i]
    }
   for(var j = arr2.length-1; j>=0; j--){
    obj[arr2[j]] = arr2[j]
   }
   var res = []
   for(var key in obj)
   {
       if(obj.hasOwnProperty(key))
       res.push(obj[key])
   }
    return res;
}  
//console.log (unionArrays([1,2,3,4,5,6],[5,6,7,8,9,10]))

arr1= [1,2,3,2,3,4,4,4,6,7,8]
  arr2 = [2,3,9,8,7,6,5,1]

function unionarrays(arr1,arr2){
  obj= {}
  count = 0;
  size1 = arr1.length;
  size2  = arr2.length;
  for(var i =0; i<size1 || i<size2; i++){
    count++;
    //console.log(obj)
    if(i<size1){
      obj[arr1[i]] = arr1[i]
    }
    if(i<size2){
      obj[arr2[i]] = arr2[i]
    }
  }
   return obj
  
}
console.log (unionarrays(arr1,arr2))