var arr1 = [1, 2, 3, 4, 5, 5];
var arr2 = [1, 2, 3, 6, 7, 8, 9];
var counter = 0

function arrayAmB(arr1, arr2) {
    var arrAmB = [];
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr2[i] == arr1[j]) {
                counter = 1;
                break;
            }
        }
        if (counter == 0) {

            arrAmB.push(arr1[i]);
        }
        counter = 0
    }
    return arrAmB;
}

function arrayBmA(arr1, arr2) {
    var arrBmA = [];
    for (var i = 0; i < arr2.length; i++) {
        for (var j = 0; j < arr1.length; j++) {
            if (arr2[i] == arr1[j]) {
                counter = 1;
                break;
            }
        }
        if (counter == 0) {

            arrBmA.push(arr2[i])
        }
        counter = 0
    }
    return arrBmA;
}

function symmetricDiff(arr1, arr2) {
    var arrSymmetricDiff = [];
    var BmA = arrayAmB(arr1, arr2)
    var AmB = arrayBmA(arr1, arr2)
    for (var i = 0; i < BmA.length; i++) {
        arrSymmetricDiff.push(BmA[i])
    }
    for (var j = 0; j < AmB.length; j++) {
        arrSymmetricDiff.push(AmB[j])
    }
    return arrSymmetricDiff

}

console.log(symmetricDiff(arr1, arr2))
