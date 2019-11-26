function intersection(set1, set2){
    var intersectionSets = []
    var count = 0;
    for(var i = 0; i < set1.length; i++){
        for(var j = 0; j < set2.length; j++){
            if(set1[i] == set2[j])
            
            intersectionSets[count++] = set1[i]
        }
    }
    return intersectionSets
}
var set1 = [1, 3, 5, 8, 7]
var set2 = [2, 7, 5, 9]
var intersectionSets = intersection(set1, set2)
console.log(intersectionSets)