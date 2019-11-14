var obj = {
    name : ['Rahul', 'Rohit', 'Rakesh', 'Ravi', 'Roy', 'Roy', 'Rahul']
}
uniqArr = []
function removeDup(arr){
    for(var i = 0; i < arr.length; i++){
        for(var j = i+1; j < arr.length; j++){
            if(arr[i] == arr[j]){
                arr[j] = null;
            }
        }
    }
    for(var i = 0; i < arr.length; i++){
        if(arr[i] !== null){
            uniqArr.push(arr[i])
        }
    }
return uniqArr
}

console.log('The unique arr is', removeDup(obj.name))
