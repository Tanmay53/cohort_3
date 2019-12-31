// set1 - set2
function difference(set1, set2) {
    if (
        set1 === undefined ||
        set2 === undefined ||
        set1 === null ||
        set2 === null
    )
        return false;
    var obj = {},
        result = {};
    size1 = set1.length;
    size2 = set2.length;
    for (i = 0; i < size1 || i < size2; i++) {
        if (i < size1) {
            if (obj[set1[i]] == undefined) {
                obj[set1[i]] = set1[i];
                result[set1[i]] = set1[i];
            } else {
                // delete intersection
                delete obj[set1[i]];
                delete result[set1[i]];
            }
        }
        if (i < size2) {
            if (obj[set2[i]] == undefined) obj[set2[i]] = set2[i];
            else {
                delete obj[set2[i]];
                delete result[set2[i]];
            }
        }
    }
    return Object.values(result);
}
var set1 = [8, 5, 6, 1, 4, 2, 7, 3];
var set2 = [1, 2, 8, 0, 9, 10, 2, 3];
console.log(difference(set1, set2));

module.exports = {
    difference
};
