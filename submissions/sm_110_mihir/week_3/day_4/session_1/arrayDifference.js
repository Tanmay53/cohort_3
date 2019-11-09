// set1-set2
function getDifference(set1,set2){
    var difference=[],index=0
    for(var i=0;i<set1.length;i++){
        for(var j=0;j<set2.length;j++){
            // checking fot intersection
            if(set1[i]==set2[j])
                set1[i]=false
        }
        if(set1[i])
            difference[index++]=set1[i]
    }
    return difference
}

var set1=[8,5,6,7,1,4,2,3]
var set2=[1,2,3,4,10]
var difference=getDifference(set1,set2)
console.log(difference)