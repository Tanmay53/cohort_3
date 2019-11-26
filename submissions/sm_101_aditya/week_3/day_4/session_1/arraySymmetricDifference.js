function Symmetricdifference(set1,set2){
    var differenceSets=[]
    var count = 0
    for(var i=0;i<set1.length;i++){
        for(var j=0;j<set2.length;j++){
            if(set1[i]==set2[j])
                set1[i]=false
        
        if(set1[i] == set2[j]){
            set1[i] = false
            set2[j] = false
    }
}
            if(set1[i])
            differenceSets[count++]=set1[i]
    }
    return differenceSets
}

var set1=[8,5,6,7, 4]
var set2=[1,2,3, 6]
var differenceSets = Symmetricdifference(set1,set2)
console.log(differenceSets)