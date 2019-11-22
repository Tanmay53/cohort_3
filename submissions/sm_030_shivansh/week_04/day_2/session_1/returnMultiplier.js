//function which takes two arguments, an array and a target value
//The function should return an array where each element is multiplied by the target value

function multiplier(array, target) {
    var result = array.map(element => element * target);

    return result;
}



console.log(multiplier([1, 2, 3, 4, 5], 5));