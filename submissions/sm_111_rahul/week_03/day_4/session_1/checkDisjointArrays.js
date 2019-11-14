
disjoint = true;
function checkDisjoint(arr1, arr2 ){
    for(i = 0; i < arr1.length; i++){
        for(j = 0; j < arr2.length; j++){
            if(arr1[i] == arr2[j]){
                disjoint = false;
            }
        }
    }
    if(disjoint == false){
        console.log('They are not disjoint arrays')
    } else{
        console.log('they are disjoint arrays')
    }

}
array1 = [2 , 4, 5 ,9];
array2 = [1 , 2 , 7];

checkDisjoint(array1, array2);