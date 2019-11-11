
function checkSuperset(firstArr, secondArr){
    if(firstArr.length >= secondArr.length){
    
        count = 0;
    for(i = 0; i < firstArr.length; i++){
        
        for(j = 0; j <  secondArr.length; j++){
           
            if( firstArr[i] == secondArr[j]){
               count++;
            }
        }

    }  
    if(count == secondArr.length && count <= firstArr.length)
    console.log('first arr is the superset of second')
    else
    console.log('first arr  is not the superset of second') 
}else
  console.log('first is not the superset of second')
    
}
arr1 = [3, 4 ,5 ]
arr2 = [3, 4]

checkSuperset(arr1, arr2)
/* test cases   arr1[ 1 , 2 , 3 ], 
                arr2 [2 , 3 , 4] 

                arr1 = [4, 2 , 7 , 8]
                arr2 = [2, 3, 4]
                
                arr1 = []
                arr2 = [2, 3, 4]*/
