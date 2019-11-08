function getIntersection(set1,set2){
    var intersection=[],index=0
    for(var i=0;i<set1.length;i++){
        for(var j=0;j<set2.length;j++){
            // checking fot intersection
            if(set1[i]==set2[j])
                intersection[index++]=set1[i]
        }
        
    }
    return intersection
}

var set1=[8,5,6,7,1,4,2,3]
var set2=[1,2,3,4,10]
var intersection=getIntersection(set1,set2)
console.log(intersection)