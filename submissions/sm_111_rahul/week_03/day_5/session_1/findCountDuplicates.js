student = {
    name: ['Rahul', 'Rahul', 'Rohit','rakesh'] 

}
function findDuplicateCount(value, arr){
    counter = 0;
    for(var i = 0; i < arr.length; i++){
        if(value == arr[i]){
           counter++
        }
    }
    return counter
}
console.log('The total count is '+ findDuplicateCount('Rahul', student.name ))