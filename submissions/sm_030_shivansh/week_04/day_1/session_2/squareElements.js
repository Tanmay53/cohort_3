//funciton which accepts an array of integers
// square of each element

function square(arr) {
    arr.forEach(function (element) {
        console.log(element * element);
    })
}
square([1, 2, 3, 4, 5]);