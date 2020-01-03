const findCountDuplicates = (arr, key) => {
    let dict = {}
    for(let i = 0; i < arr.length; i++) {
        if(dict[arr[i]] == undefined)
            dict[arr[i]] = 1
        else
            dict[arr[i]]++
    }

    if(dict[key] == undefined)
        return 0
    else 
        return dict[key]
}

//console.log(findCountDuplicates([1,2,2,3,3,3,4,5,6,6,6,6], 7))
module.exports = findCountDuplicates