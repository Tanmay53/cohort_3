function getUnion(set1,set2){
    var union=[]
    for(var i=0;i<set1.length;i++){
        for(j=0;j<set2.length;j++){
            // checking fot intersection and marking false
            if(set1[i]==set2[j])
                set2[j]=false
        }
        // add all the elements of set1
        union[i]=set1[i]
    }
    for(i=0;i<set2.length;i++){
        // add only set2-set1
        if(set2[i]!=false){
            console.log(set2[i])
            union[union.length++]=set2[i]
        }
    }
    return union
}

var set1=[8,5,6,7,1,4,2,3]
var set2=[1,2,3,4,10]
var union=getUnion(set1,set2)
console.log(union)