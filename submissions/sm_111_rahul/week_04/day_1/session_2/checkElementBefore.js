var arr = [5, 6, 5, 9]
function checkElementBefore(array1){
 var newArr = array1.map(function(element, index){
         if(element < array1[index - 1]){
            return -1;
         }else 
         return 1;
        })
    return newArr    
    }
    console.log(checkElementBefore(arr))
