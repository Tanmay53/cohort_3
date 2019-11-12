// function to find count of duplicate elements

function findCountDuplicates(arr, target) {

    var objects = {
        count: 0,
        getCount: function () {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] === target)
                    this.count++;
            }

        },
    }
    objects.getCount();
    return objects.count;
}


console.log(findCountDuplicates([1, 1, 1, 1], 1));
console.log(findCountDuplicates([7, 1, 1, 1, 2, 7, 12, 7], 7));
console.log(findCountDuplicates([1, 1, 1, 2, 'shivansh'], 'shivansh'));