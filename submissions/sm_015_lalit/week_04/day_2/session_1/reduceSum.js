function arrayEqualto(arr,target){
  var result = arr.filter((x)=>x>target).reduce((ac,i)=>ac=ac+i)
  console.log(result)
}

arrayEqualto([2,5,4,6,5,1],4)