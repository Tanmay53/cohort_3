function findIndexPos(array,ch){
    var cnt=0
    for(i=0;i<array.length;i++){
        if(array[i]===ch){
            cnt++
            console.log(i)
            break
        }

    }
    if (cnt==0){
        console.log(-1)
    }

}

findIndexPos(['a', 'b', 'c', 'a', 'd', 'e', 'e', 'g', 'b', 'a', 'm', 'i'],'z')
findIndexPos(['a', 'b', 'c', 'a', 'd', 'e', 'e', 'g', 'b', 'a', 'm', 'i'],'e')