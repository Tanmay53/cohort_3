function subset(set1, set2){
    for (var i = 0; i < set2.length; i++){
        var output = "NO subset"
        for (var j = 0; j < set1.length; j++)
        if (set2 [i] == set1 [j])
        output = "It's a subset"
    }
    return output
}
var set1 = [3, 7, 8, 99, 55]
var set2 = [3, 7, 1]
console.log(subset(set1, set2))