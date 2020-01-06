const arrayDifference = (arr1, arr2) => {
    let dict = {}

    for(let i = 0; i < arr2.length; i++) {
        dict[arr2[i]] = true
    }

    let diff = []
    for(let i = 0; i < arr1.length; i++) {
        if(dict[arr1[i]] == undefined)
            diff.push(arr1[i])
    }

    return diff
}

// console.log(arrayDifference([1,2,3], [4,5,6]))
module.exports = arrayDifference


