//check if set1 is a subset of set2
function isSubset(set1,set2){
    //for each element of set1 iterate set2
    var present
    set1.forEach(function(element1){
        present=false
        set2.forEach(function(element2){
            if(element1==element2)
                present=true
        })
    
    })
    return present
}

var user={
    set1: [1,2,3],
    set2: [8,5,6,3,1,4,2,7],
    
}

console.log(isSubset(user.set1,user.set2))


