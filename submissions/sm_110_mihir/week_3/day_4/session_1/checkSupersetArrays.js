// check if set1 is a superset of set2
function isSuperset(set1,set2){
    //for each element of set2 iterate set1
    var present
    for(var i=0;i<set2.length;i++){
        present=false
        for(var j=0;j<set1.length;j++)
            if(set2[i]==set1[j])
                present=true
    }
    return present
}
var set1=[8,5,6,7,1,4,2,3]
var set2=[1,2,3]
console.log(isSuperset(set1,set2))