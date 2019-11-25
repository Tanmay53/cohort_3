function intersectionArrays(arr1,arr2){
    var obj1={}
    var inta=[]
    for(i=0;i<arr1.length;i++){
        obj1[arr1[i]]=true
    }
    for(i=0;i<arr2.length;i++){
        if(obj1[arr2[i]]){
            inta.push(arr2[i])
        }
    }
    console.log(inta)

}

intersectionArrays(['e','b','a','f','h'],['a','b','c','d'])
intersectionArrays([2,9],[5,2,4,1,9,11])