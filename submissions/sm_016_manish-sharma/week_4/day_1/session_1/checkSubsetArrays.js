function checkSubsetArrays(arrSmall,arrBig){
    var obj1={}   

    for(i=0;i<arrBig.length;i++){
        obj1[arrBig[i]]=i
    }
    for(i=0;i<arrSmall.length;i++){
        if(obj1[arrSmall[i]]==undefined){
            console.log(arrSmall,' is not a subset of ',arrBig)
            return
        }
    }
    console.log(arrSmall,'is a subset of', arrBig)
    

}

checkSubsetArrays(['a','b'],['a','b','c','d'])
checkSubsetArrays(['e','d'],['a','b','c','d'])