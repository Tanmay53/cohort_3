function checkDisjoint(arr1, arr2) {
    var counter = 0;
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) 
            {
                counter++
            }
        }
    }
    if (counter > 0) {
        console.log("joint")
    }
    else {
        console.log("disjoint");
    }
}


checkDisjoint([1, 2, 3, 4, 5], [6, 7, 8, 5])
