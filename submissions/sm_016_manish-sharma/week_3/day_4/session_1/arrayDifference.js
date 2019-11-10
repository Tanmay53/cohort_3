function arrayDifference(array1,array2){
    var arrIn=[]
    var arrDiff=[]
    var count=0

// merging the two arrays in array 2
    for (i=0;i<array1.length;i++){
        array2.push(array1[i])
    }

//Finding the intersection of array 2 and array 1 i.e. arrIn[]
    for (i=0;i<array2.length;i++){
        if((array2.indexOf(array2[i],i+1))!= -1){
            arrIn.push(array2[i])
        }
    }

//merging the array 1 and arrIn[] in array 1
    for (i=0;i<arrIn.length;i++){
        array1.push(arrIn[i])       
    }

//removing duplicates of array 1 and pushing uniques into arrDiff[]
    for (i=0;i<array1.length;i++){
        if((array1.indexOf(array1[i],i+1))== -1){
            arrDiff.push(array1[i])
        }
    }

//counting the instances where the elements of arrIn[] and arrDiff[] are equal i.e. 'n' times
  for (i=0;i<arrIn.length;i++){
    for(j=0;j<arrDiff.length;j++){
      if(arrIn[i]==arrDiff[j]){                  
        count++
      }
    }
  }

//popping the last n elements of arrDiff[]
 for(i=0;i<count;i++){
   arrDiff.pop()
 }

console.log(arrDiff) 
}

arrayDifference(['2','4','5','6','3'],['1','2','3','9'])