// check if set1 is a superset of set2
function isSuperset(set1,set2){
    //for each element of set2 iterate set1
    var present
    set2.forEach(function(element2){
        present=false
        set1.forEach(function(element1){
            if(element1==element2)
                present=true
        })
    })
    return present
}

var user={
    set1:[8,5,6,7,1,4,2,3],
    set2:[1,2,3]
}
console.log(isSuperset(user.set1,user.set2))
