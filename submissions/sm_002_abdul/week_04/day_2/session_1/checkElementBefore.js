arr=[
    {'deodrant':140},
    {'hairOil':75},
    {'pen':25},
    {'soap':55}
]

function objPrice(arr){
    var output=arr.map(function(element){
        var prc=Object.values(element)[0];
        return prc;
    }).reduce(function(accum,current){
        return accum+current;
    },0);

    return output;
}

console.log(objPrice(arr))