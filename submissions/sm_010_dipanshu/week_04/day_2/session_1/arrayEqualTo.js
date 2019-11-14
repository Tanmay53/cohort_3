function arrayEqual(array,target){
    var newArray = array.filter(function(element){
                        return element != target
                    }).map(function(element){
                        return element * element
                    })
    console.log(newArray)
}

arrayEqual([1,2,3,1,4,5,1,6,7,1,8,9,1],1)