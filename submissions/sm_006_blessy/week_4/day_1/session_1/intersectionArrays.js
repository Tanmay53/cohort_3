function intersectionArrays(arr1,arr2){
    var obj = {
   arr:[],
    }
    for(var i = 0; i<arr1.length; i++){
     obj[arr1[i]] = 0 ;

    }

    for(var i = 0; i<arr2.length; i++){
        //for(key in obj){
        if(obj[arr2[i]] == obj[arr1[i]]){
            //
            console.log(arr2[i])

            obj[arr2[i]] =  obj[arr2[i]]++;
       
       obj.arr.push(arr2[i])
     
      console.log(obj.arr)
         }
    }

}
 return intersectionArrays([1,2,3,4,5,6,7],[3,4,5,6,7,8,9])