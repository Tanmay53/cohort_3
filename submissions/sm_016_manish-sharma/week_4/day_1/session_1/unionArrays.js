function unionArrays(arr1,arr2){
    var obj1={}   

    for(i=0;i<arr1.length;i++){
        obj1[arr1[i]]=i
    }   

    for(i=0;i<arr2.length;i++){
        obj1[arr2[i]]=i
    }
    console.log(Object.keys(obj1))
}
unionArrays(['a','b'],['a','b','c','d'])
unionArrays(['x','y','z','26'],['e','f','g','h'])