// to find intersection
function intersection(set1,set2){
    var obj={},result={}
    size1=set1.length
    size2=set2.length
    for(i=0;i<size1||i<size2;i++){
        if(i<size1){
            if(obj[set1[i]]==undefined)
                obj[set1[i]]=set1[i]
            else
            // if item is already present, means its an intersection
                result[set1[i]]=set1[i]
        }
        if(i<size2){
            if(obj[set2[i]]==undefined)
                obj[set2[i]]=set2[i]
            else
                result[set2[i]]=set2[i]
        }
    }
    return Object.values(result)
}
var set1= [1,2,3]
var set2= [8,5,6,3,1,4,2,7]
console.log(intersection(set1,set2))

