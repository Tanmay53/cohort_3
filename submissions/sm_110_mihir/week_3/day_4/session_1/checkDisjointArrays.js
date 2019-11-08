function isDisjoint(set1, set2){
    //for each element of set1 iterate set2
    for(var i=0;i<set1.length;i++){
        for(var j=0;j<set2.length;j++)
            if(set1[i]==set2[j])
                return false
    }
    return true
}

var set1=[1,2,3,4]
var set2=[8,5,6,7]
console.log(isDisjoint(set1, set2))
