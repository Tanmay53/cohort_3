function arrayDifference(arr1,arr2){
    var obj1={}
    var diff=[]
    for(i=0;i<arr2.length;i++){
        obj1[arr2[i]]=true
    }
    for(i=0;i<arr1.length;i++){
        if(obj1[arr1[i]]==undefined){
            diff.push(arr1[i])
        }
    }
    console.log(diff)

}

arrayDifference([1 , 2 , 3 , 4 , 5 ],[4 , 5 , 6 , 7 , 8])
arrayDifference(['a' , 'b' , 'c' , 'd' , 'e', 'f'],['i' , 'j' , 'c' , 'k' , 'z' , 'e'])