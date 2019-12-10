
var obj = {
    arr1: [1, 2, 3, 4, 5],
    arr2: [6, 7, 8,],
    disjoint: function () {
        var arrA = this.arr1;
        var arrB = this.arr2;
        for (var i = 0; i < arrA.length; i++) {
            for (var j = 0; j < arrB.length; j++) {
                if (arrA[i] == arrB[j]) {
                    return "not disjoint"
                }
            }
        }
        return "disjoint"
    }
}

console.log(obj.disjoint())