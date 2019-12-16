var a = [9,4,5,7,7,2,6,3,4,6];
var b = [9,4,5,7,7]
function checkSuperset(a, b) {
    var times = 0
    for(var i = 0; i < a.length; i++){
        for(var j = 0; j < b.length; j++){
            if(b[i] == a[j]){
                times ++
                break
            }
        }
    }
    if(times == b.length){
        console.log("Superset")
    }
    else{
        console.log("No Superset")
    }    
}

checkSuperset(a,b)
