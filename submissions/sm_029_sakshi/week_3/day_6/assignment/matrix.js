function rotate(arr) {
    rows = arr.length
    cols = arr[0].length
    //console.log(arr)

    // transpose of matrix
    for(var i = 0; i < rows; i++) {
        for(var j = i+1; j < cols; j++) {
            var temp = arr[i][j]
            arr[i][j] = arr[j][i]
            arr[j][i] = temp
        }
    }
//console.log(temp)
    // swap columns
    <!-- now we will make beg to eng and bring end to beg------------ -->
    beg = 0
    end = cols-1
    while(beg < end) {
        for(var i = 0; i < rows; i++) {
            var temp = arr[i][beg]
            arr[i][beg] = arr[i][end]
            arr[i][end] = temp
        }
        beg++
        end--
    }
    
    return arr
    //console.log(arr)
}

function printArr(arr) {
    arr = rotate(arr)
    for(var i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}


var arr = [
            [1,2,3],
            [4,5,6],
            [7,8,9]
        ]

  
console.log(printArr(arr))        
