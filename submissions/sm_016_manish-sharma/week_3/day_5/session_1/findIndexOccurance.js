function findIndexOccurance(array,ch){
    var positions=[]
    var cnt=0
    for(i=0;i<array.length;i++){
        if(array[i]===ch){
            cnt++
            positions.push(i)
        }

    }
    if (cnt==0){
        console.log(-1)
    }
    else{
        console.log(positions)
    }

}

findIndexOccurance(['a', 'b', 'c', 'a', 'd', 'e', 'e', 'g', 'b', 'a', 'm', 'i'],'z')
findIndexOccurance(['a', 'b', 'c', 'a', 'd', 'e', 'e', 'g', 'b', 'a', 'm', 'i'],'e')