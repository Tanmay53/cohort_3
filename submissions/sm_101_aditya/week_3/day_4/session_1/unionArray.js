function union (set1, set2){
    var unionSets = []
    for(var i = 0; i < set1.length; i++){
        for(var j = 0; j < set2.length; j++){
            if(set1[i] == set2[j])
            set2[j] = false
        }
        unionSets[i] = set1[i]
    }
    for(i = 0; i < set2.length; i++){
        if(set2[i] != false){
            //console.log(set2[i])
            unionSets[unionSets.length++]=set2[i]
        }
    }
    return unionSets
}
var set1 = [1,4, 6, 9]
var set2 = [7, 4, 8]
var unionSets = union(set1, set2)
console.log("These are the elements ", unionSets)