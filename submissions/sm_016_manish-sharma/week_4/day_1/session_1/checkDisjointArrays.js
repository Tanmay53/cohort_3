function checkDisjointArrays(arr1,arr2){
    var obj1={}   
    for(i=0;i<arr1.length;i++){
        obj1[arr1[i]]=i
    }
    
    for(i=0;i<arr2.length;i++){
        if(obj1[arr2[i]]){
            console.log('Not Disjoint Arrays')
            return
        }
    }
    console.log('Disjoint Arrays')
}

checkDisjointArrays(['a','b','c','d'],['a','b','c','d'])

checkDisjointArrays(['a','b','c','d'],['e','f','g','h'])