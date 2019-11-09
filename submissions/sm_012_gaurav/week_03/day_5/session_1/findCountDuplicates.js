//Function to count number of duplicates of  value in array.
function countDuplicatesArray(array, value) {
    var count = 0;   //Variable to store count of duplicate elements.
    for (var i = 0; i < array.length; i++) {
        if (value === array[i]){
            count++;
        }
    }
    return count;
}

object = {
    array: [2,5,8,8,9,7,1,10,8,8,8],
    value: 8,
    countDuplicates: function() {
        console.log(countDuplicatesArray(this.array, this.value));
    }
}

object.countDuplicates();