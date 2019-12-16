
function subsetArrays(){

    var arr1 = [2,5,7,11,13,15,24]
     var arr2 = [2,5,7]
      var subset =[]
    for (i=0;i< arr1.length;i++){
        for (j=0;j< arr2.length;j++){
            if (arr1[i] == arr2[j]){
                subset.push(arr1[i])

            }
        }
    }

  return subset
  }
  console.log(subsetArrays())
