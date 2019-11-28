function checkElementBefore(arr1){
    var work=arr1.map(function(x,i){
        if (arr1[i]<arr1[i-1]){
          return -1
        }
        else{
            return 1
        }
    })
   console.log(work) 
}

checkElementBefore([3,5,4,1,2,5,4])