
function intersection_arrays(){

  var arr1 = [2,5,7,11,13,15]
   var arr2 = [3,8,11,14,15]
    var intersection =[]
  for (i=0;i< arr1.length;i++){
      for (j=0;j< arr2.length;j++){
          if (arr1[i] == arr2[j]){
              intersection.push(arr1[i])

          }
      }
  }
  //console.log(intesection_arrays())
return intersection
}
console.log(intersection_arrays())
