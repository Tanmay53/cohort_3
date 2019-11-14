// function to join each  array items with a given character

function joinArray(arr, char) {

    var joinString = arr[0];

    for (var i = 1; i < arr.length; i++) {
        joinString += char + String(arr[i])
    }

    return joinString;
}

console.log(joinArray([1, 2, 3, 4, 5], "-"));
console.log(joinArray(["My", "name", "is", "Shivansh", "Singh"], "---"));

