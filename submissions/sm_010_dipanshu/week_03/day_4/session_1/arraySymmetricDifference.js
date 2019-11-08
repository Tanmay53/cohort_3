//function to find the symmetric difference between arrays a and b. Essentially all the uniques elements in a and b and not common elements. Logic --> Concatenate..union..separate intersection
function symDiff(a,b){

    var temp = []
    var unionArray = [] 

    for(var i=0;i<a.length;i++){
        temp.push(a[i])
    }

    for(var i=0;i<b.length;i++){
        temp.push(b[i])
    }

    console.log(temp)   //concatenated arrays

    firstElem = temp[0]
    unionArray.push(firstElem)

    for(var i=1;i<temp.length;i++){
        if(unionArray.indexOf(temp[i]) == -1){
            unionArray.push(temp[i])
        }
    }

    console.log(unionArray) //found the union

    var c = []

    notPresent = false

    for(var i=0; i < a.length; i++){
        for(var j=0; j < b.length; j++){
            if(a[i] === b[j]){
                if(c.indexOf(a[i]) == -1){
                    notPresent = true
                }
            }
        }
        if(notPresent){
            c.push(a[i])
        }
        notPresent = false
    }

    console.log(c)  //found the intersection

    var interSectionArrary = []

    //removing the intersection elements
    for(var i=0; i<unionArray.length; i++){
        if(c.indexOf(unionArray[i]) == -1){
            interSectionArrary.push(unionArray[i])
        }
    }

    return interSectionArrary
}

output = symDiff([6,1,6,7,'z',7,8,9,10,'a'],[1,2,3,4,5,'z',1])
console.log(output)