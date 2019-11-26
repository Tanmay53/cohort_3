function rotateMatrix(array){
    for(var i=0;i<array.length;i++){
        console.log(array[i])
    }

    console.log()

    row = array.length
    col = array.length
    // console.log(row,col)

    res = []
    for(var i=0;i<row;i++){
        temp = []
        for(var j=0;j<col;j++){
            temp.push(array[j][i])
        }
        temp.reverse()
        res.push(temp)
    }
    
    for(var i=0;i<array.length;i++){
        console.log(res[i])
    }

    console.log()
}

a = [[1,1,1,1],[2,2,2,2],[3,3,3,3],[4,4,4,4]]
b = [[1,1,1],[2,2,2],[3,3,3]]
c = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]

rotateMatrix(a)
rotateMatrix(b)
rotateMatrix(c)