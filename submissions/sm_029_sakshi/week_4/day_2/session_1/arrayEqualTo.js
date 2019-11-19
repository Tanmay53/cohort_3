function filterEqual(arr, target) {
    var res = arr.filter(function(element){
                    return element != target
              }).map(function(element){
                    return element **2
              })

    return res
}

var arr = [1,4,5,6,7,8]
console.log(filterEqual(arr, 4))