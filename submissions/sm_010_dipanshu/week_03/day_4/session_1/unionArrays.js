function unionArrays(a,b){

    var temp = []   //temporary array
    var unionArray = [] //final union array


    //concatenating both input arrays
    for(var i=0;i<a.length;i++){
        temp.push(a[i])
    }

    for(var i=0;i<b.length;i++){
        temp.push(b[i])
    }

    //console.log(temp)

    //checking to see if the element of merged arrays is present in the union array. Used to remove duplicates and have single instances.
    for(var i=0;i<temp.length;i++){
        if(unionArray.indexOf(temp[i]) == -1){
            unionArray.push(temp[i])
        }
    }

    return unionArray
}

unionArray = unionArrays([6,1,6,7,'z',7,8,9,10,'a'],[1,2,3,4,5,'z',1])
console.log(unionArray)