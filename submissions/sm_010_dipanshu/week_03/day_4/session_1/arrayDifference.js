//function to check difference of arrays a & b. Essentially a-b
function checkDifference(a,b){

    var notPresent = true   //flag
    var aDifferenceb = []   //final output array

    for(var i=0; i < a.length; i++){
        for(var j=0; j < b.length; j++){
            if(a[i] === b[j]){
                notPresent = false
                break
            }
            else{
                notPresent = true
            }
        }
        if(notPresent){
            aDifferenceb.push(a[i])
        }
    }
    return aDifferenceb
}

var output = checkDifference([6,1,6,7,'z',7,8,9,10,'a'],[1,2,3,4,5,'z',1])
console.log(output)