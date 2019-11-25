function checkSupersetArrays(arrBig,arrSmall){
    var obj1={}
    for(i=0;i<arrBig.length;i++){
        obj1[arrBig[i]]=true
    }
    for(i=0;i<arrSmall.length;i++){
        if(obj1[arrSmall[i]]==undefined){
            console.log(arrBig,' is not a super set of ',arrSmall)
            return
        }
    }
    console.log(arrBig,' is a super set of ',arrSmall)

}

checkSupersetArrays(['a','b','c','d'],['a','b'])
checkSupersetArrays(['a','b','c','d'],['e','d'])