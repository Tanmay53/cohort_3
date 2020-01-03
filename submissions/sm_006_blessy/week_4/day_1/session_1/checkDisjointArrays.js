function checkDisjoint(arr1, arr2) {
    var obj = {}
    var flag = true
    for(var i = 0; i<arr1.length; i++){
      obj[arr1[i]] = 0
    }
        for(var i=0; i<arr2.length; i++){
          if(obj[arr1[i]] == obj[arr2[i]])
          {
            flag = false
        }
    
        }
    
    if(flag)
      {
      console.log("true")
      }
  else
    console.log("false")
}

checkDisjoint ([1,2,3,4],[6,7,8,9])