// funciton which accepts an array of integers
// By default a each element has a return value of 1
// If the element before it is greater than the element, then return -1


function checkElement(array) {
    var result = array.map(function (element, index, array) {
        if (array[index - 1] > element)
            return -1;


        else
            return 1;


    });

    return result;
}


console.log(checkElement([1, 2, 3, 4, 5]));
console.log(checkElement([1, 4, 3, 7, 6, 5]));
console.log(checkElement([5, 4, 3, 2, 1]));