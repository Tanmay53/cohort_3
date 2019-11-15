// to check if set1 is subset of set2
function subset(set1,set2){
    var obj={}
    size1=set1.length
    size2=set2.length
    for(i=0;i<size1||i<size2;i++){
        if(i<size1)
            obj[set1[i]]=set1[i]
        if(i<size2)
            obj[set2[i]]=set2[i]
    }
    var objLength= Object.keys(obj).length
    console.log(objLength)
// if oobject length will be same as set2 if set1 is subset
    if(objLength==size2)  
        return true
    else
        return false            
}
var set1= [1,2,3]
var set2= [8,5,6,3,1,4,2,7]

console.log(subset(set1,set2))

