// function to find all the positions of a given value inside an array

function findIndexPos(arr, ele) {

    var position = {
        index: [],
        find: function () {

            for (var i = 0; i < arr.length; i++) {

                if (ele === arr[i])
                    this.index.push(i);

            }

        },

    }

    position.find();


    if (position.index.length === 0)
        return -1;


    return position.index;
}
console.log(findIndexPos([9, 1, 1, 1], 1));
console.log(findIndexPos([9, 1, 1, 1], 7));
console.log(findIndexPos([9, 1, 1, 1, 8, 7, 8, 4], 8));

