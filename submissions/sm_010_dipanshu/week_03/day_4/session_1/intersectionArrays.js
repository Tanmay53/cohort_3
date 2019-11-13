function intersection(a,b){
    var c = []  //temporary array

    notPresent = false  //flag

    for(var i=0; i < a.length; i++){
        for(var j=0; j < b.length; j++){
            if(a[i] === b[j]){                  //checking to see if the element is present in both the arrays.
                if(c.indexOf(a[i]) == -1){      //pushing the common elements to the final array. Pushing only single instances of them.
                    notPresent = true
                }
            }
        }
        if(notPresent){
            c.push(a[i])
        }
        notPresent = false
    }

    return c
}

intersectionArray = intersection([1,1,1,1,1,2,4,7],[1,1,1,1,1,3,4,7])
console.log(intersectionArray)