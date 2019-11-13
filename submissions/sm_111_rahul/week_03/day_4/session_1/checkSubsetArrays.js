
function checkSubset(firstArr, secondArr){
    if(firstArr.length <= secondArr.length){
    
        count = 0;
    for(i = 0; i < firstArr.length; i++){
        
        for(j = 0; j <  secondArr.length; j++){
           
            if( firstArr[i] == secondArr[j]){
               count++;
            }
        }

    }  
    if(count == firstArr.length && count <= secondArr.length)
    console.log('first arr is the subset of second')
    else
    console.log('first arr  is not the subset of second') 
}else
  console.log('first is not the subset of second')
    
}
arr1 = []
arr2 = [2, 3, 4]

checkSubset(arr1, arr2)
/* test cases   arr1[ 1 , 2 , 3 ], 
                arr2 [2 , 3 , 4] 

                arr1 = [4, 2 , 7 , 8]
                arr2 = [2, 3, 4]
                
                arr1 = []
                arr2 = [2, 3, 4]*/
