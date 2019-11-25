function disjoint(set1, set2){
    for(var i = 0; i < set1.length; i++){
        for(var j =0; j < set2.length; j++)
        if(set1[i] == set2[j])
        return "Not Disjoint" 
    }
    return "Yes Disjoint"
}
var set1 = [2, 4, 7, 34]
var set2 = [5, 8, 72, 67, 34]
console.log(disjoint(set1, set2))