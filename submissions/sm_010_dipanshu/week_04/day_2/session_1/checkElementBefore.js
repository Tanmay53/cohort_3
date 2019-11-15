function calculateCost(array){
    var totalCost = array.map(function(element){
        return Number(element.split(' ')[1])
    }).reduce(function(acc,cur){
        return acc+cur
    })
    console.log(totalCost)
}

calculateCost(['a 10','b 20','c 30','d 40'])