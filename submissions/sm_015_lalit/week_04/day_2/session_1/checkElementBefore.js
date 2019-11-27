function checkElementBefore(arr,target){
    var result = arr.filter((x)=>typeof(x)=="number").reduce((ac,i)=>ac=ac+i)
    console.log(result)
  }
  
  checkElementBefore(['item1',1,'item2',7,'item3',11])