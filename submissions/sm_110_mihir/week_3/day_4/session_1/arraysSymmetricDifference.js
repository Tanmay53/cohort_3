// symmetric difference
function getSymmetricDifference(set1,set2){
    var difference=[],index=0
    for(var i=0;i<set1.length;i++){
        for(var j=0;j<set2.length;j++){
            // checking fot intersection and marked flag
            if(set1[i]==set2[j]){
                set1[i]=false
                set2[j]=false
            }
        }
        // add set1-set2
        if(set1[i])
            difference[index++]=set1[i]
    }
    // add set2-set1
    for(i=0;i<set2.length;i++){
        if(set2[i])
            difference[index++]=set2[i]
    }
    return difference
}

var set1=[8,5,6,7,1,4,2,3]
var set2=[1,2,3,4,10]
var difference=getSymmetricDifference(set1,set2)
console.log(difference)