//function to check if inp2 array is a superset of inp1 array
function supersetArrays(inp1,inp2){

    arrayIsSuperset = false
    var counter = 0

    for(var i=0;i<inp1.length;i++){
        
        for(var j=0;j<inp2.length;j++){
            
            if(inp1[i]===inp2[j]){
                counter++
            }
        }
    }

    if(counter == inp1.length){
        arrayIsSuperset = true
        console.log('A superset array')
    }
    
    if(arrayIsSuperset == false){
        console.log('Not a superset array')
    }
}

supersetArrays([10,9,8,0,2,202],[10,9,8,0,2,3,4,5,6,7,1,3,5,6,202])