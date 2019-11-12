// function to find the position first occurence of a given value inside an array

function findIndexPos(arr, ele) {

    var position = {
        index: -1,
        find: function () {
            for (var i = 0; i < arr.length; i++) {
                if (ele === arr[i]) {

                    this.index = i;
                    break;

                }
            }
        }
    }
    position.find();
    return position.index;
}

console.log(findIndexPos([9, 1, 1, 1], 1));
console.log(findIndexPos([9, 1, 1, 1], 7));
console.log(findIndexPos([9, 1, 1, 1, 8, 7, 8, 4], 8));
