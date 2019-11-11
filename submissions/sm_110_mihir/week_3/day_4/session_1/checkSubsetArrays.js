// check if set1 is a subset of set2
function isSubset(set1,set2){
    //for each element of set1 iterate set2
    var present
    for(var i=0;i<set1.length;i++){
        present=false
        for(var j=0;j<set2.length;j++)
            if(set1[i]==set2[j])
                present=true
    }
    return present
}
var set1=[1,2,3]
var set2=[8,5,6,7,1,4,2]
console.log(isSubset(set1,set2))