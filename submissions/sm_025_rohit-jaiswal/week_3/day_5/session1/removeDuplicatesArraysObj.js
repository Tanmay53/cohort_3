function removeDuplicatesArrayObj(test) {
    var obj = {};
    for (var i = 0; i < test.length; i++) {
        obj[test[i]] = test[i];
    }
    return Object.values(obj);
}
console.log(removeDuplicatesArrayObj([9, 4, 5, 7, 7, 2, 6, 3, 4, 6]))