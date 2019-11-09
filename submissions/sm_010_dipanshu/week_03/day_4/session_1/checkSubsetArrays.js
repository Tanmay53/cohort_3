//function to check if inp1 array is a subset of inp2 array
function subsetArrays(inp1,inp2){

    arrayIsSubset = false
    var counter = 0

    for(var i=0;i<inp1.length;i++){
        
        for(var j=0;j<inp2.length;j++){
            
            //checking if the element of inp1 is present in inp2 array
            if(inp1[i]===inp2[j]){
                counter++
            }
        }
    }

    if(counter == inp1.length){
        arrayIsSubset = true
        console.log('A subset array')
    }
    
    if(arrayIsSubset == false){
        console.log('Not a subset array')
    }
}

subsetArrays([10,9,8,0,2,20],[10,9,8,0,2,3,4,5,6,7,1,3,5,6,202])