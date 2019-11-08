function disjointArrays(inp1,inp2){

    arraysAreDisjoint = true

    for(var i=0;i<inp1.length;i++){
    
        for(var j=0;j<inp2.length;j++){
            
            //checking if arrays have any common element in them. Exit at once if found.
            if(inp1[i]===inp2[j]){
                arraysAreDisjoint = false
                console.log('Not disjoint Arrays') 
                break;
            }
        }
    }
    
    if(arraysAreDisjoint){
        console.log('Disjoint Arrays')
    }
}

disjointArrays([1,2,3,4],[10,9,8,0])