function subset(set1, set2){
    for (var i = 0; i < set1.length; i++){
        var output = "NO subset"
        for (var j = 0; j < set2.length; j++)
        if (set1 [i] == set2 [j])
        output = "It's a subset"
    }
    return output
}
var set1 = [3]
var set2 = [3, 7, 8, 99, 55]
console.log(subset(set1, set2))