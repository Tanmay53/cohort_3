function findIndexOccurance(value, arr){
    for(var i = 0; i < arr.length; i++){
        if(value == arr[i]){
            positions.push(i)
        }else {
            counter++;
            if(counter == arr.length){
                return -1;
            }
        }
    }
    return positions
}
var positions = []
var counter = 0;
var value = 6;
var arr = [3, 5 ,6 , 7 , 6 ,9, 'rahul', 'boy', 6 ]
console.log('The positions of occurances of ' + value + ' is ' + findIndexOccurance(value,arr) )