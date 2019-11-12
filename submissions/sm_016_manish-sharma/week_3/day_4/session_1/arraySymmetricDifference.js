function arraySymmetricDifference(array1, array2){
    var arrIn=[]
    var arrDiff1=[]
    var arrDiff2=[]
    var arrUn=[]
    var count1=0
    var count2=0

// merging the two arrays in arrUn[]
for (i=0;i<array1.length;i++){
    arrUn.push(array1[i])
}    
for (i=0;i<array2.length;i++){
    arrUn.push(array2[i])
}

//Finding the intersection of array 2 and array 1 i.e. arrIn[]
for (i=0;i<arrUn.length;i++){
    if((arrUn.indexOf(arrUn[i],i+1))!= -1){
        arrIn.push(arrUn[i])
    }
}

//------------

//merging the array 1 and arrIn[] in array 1
for (i=0;i<arrIn.length;i++){
    array1.push(arrIn[i])       
}

//removing duplicates of array 1 and pushing uniques into arrDiff1[]
for (i=0;i<array1.length;i++){
    if((array1.indexOf(array1[i],i+1))== -1){
        arrDiff1.push(array1[i])
    }
}

//counting the instances where the elements of arrIn[] and arrDiff1[] are equal i.e. 'n' times
for (i=0;i<arrIn.length;i++){
for(j=0;j<arrDiff1.length;j++){
  if(arrIn[i]==arrDiff1[j]){                  
    count1++
  }
}
}

//popping the last n elements of arrDiff1[]
for(i=0;i<count1;i++){
arrDiff1.pop()
}

//--------


//merging the array 2 and arrIn[] in array 1
for (i=0;i<arrIn.length;i++){
    array2.push(arrIn[i])       
}

//removing duplicates of array 2 and pushing uniques into arrDiff2[]
for (i=0;i<array2.length;i++){
    if((array2.indexOf(array2[i],i+1))== -1){
        arrDiff2.push(array2[i])
    }
}

//counting the instances where the elements of arrIn[] and arrDiff2[] are equal i.e. 'n' times
for (i=0;i<arrIn.length;i++){
for(j=0;j<arrDiff2.length;j++){
  if(arrIn[i]==arrDiff2[j]){                  
    count2++
  }
}
}

//popping the last n elements of arrDiff2[]
for(i=0;i<count2;i++){
arrDiff2.pop()
}

//merging arrDiff1 into arrDiff2
for (i=0;i<arrDiff1.length;i++){
    arrDiff2.push(arrDiff1[i])
} 

console.log(arrDiff2)
}

arraySymmetricDifference(['2','4','5','6','3'],['1','2','3','9'])