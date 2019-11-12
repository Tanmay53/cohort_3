//check if set1 , set2 are disjoint
function isDisjoint(set1,set2){
    //for each element of set1 iterate set2
    set1.forEach(function(element1){
        set2.forEach(function(element2){
            if(element1==element2)
                return false
        })
    
    })
    return true
}

var user={
    set1: [1,2,3],
    set2: [8,5,6]
    
}

console.log(isDisjoint(user.set1,user.set2))
