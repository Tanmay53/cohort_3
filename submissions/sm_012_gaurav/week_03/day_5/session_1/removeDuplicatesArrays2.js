function removeDuplicatesArrays (array) {
    var uniqueArray = [];   //Variable to hold unique elements of array.
    for (var i = 0; i < array.length; i++) {
        /*Condition to check if particular element is present in the uniqueArray or not.
        If not, push the element into uniqueArray.*/
        if (uniqueArray.indexOf(array[i]) == -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}

object = {
    array: ['aaa','bbb','ccc','c','aaa','bbb','ccc'],
    reomveDuplicateElements: function() {
        var uniqueArray = removeDuplicatesArrays(this.array);
        console.log("Unique Elements of the array are:",uniqueArray);
    }
}

object.reomveDuplicateElements();