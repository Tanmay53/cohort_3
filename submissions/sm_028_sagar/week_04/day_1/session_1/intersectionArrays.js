var input1 = [10, 3.5, 22, 5, 0, 0];
var input2 = [55, 49, 0, 10, 22, 99, 3.5] //input

//invoking function
console.log("Intersection array: ", intersectionArrays(input1, input2))



//intersection arrays
function intersectionArrays(input1, input2) {
    var intersection = {} // sample object 
    var intersectionArr = [] //sample array to collect output
    for (var i = 0; i < input1.length; i++) {
        intersection[input1[i]] = input1[i];
    }
    for (var j = 0; j < input2.length; j++) {
        if (input2[j] == intersection[input2[j]]) {
            intersectionArr.push(input2[j]);
        }
    }
    return intersectionArr;
}



// var input1 = [10, 3.5, 22, 5, 0, 0];
// var input2 = [55, 49, 0, 10, 22, 99, 3.5] //input
// output : Intersection array:  [ 0, 10, 22, 3.5 ]