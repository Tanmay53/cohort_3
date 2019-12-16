//Pyramid
function pyramid(rows) {
    var cols = 2 * rows + 1; //total columns
    for (var i = 0; i < rows; i++) {
        var str = '';
        var arr = [];
        for (var j = 1; j <= cols; j++) {
            arr[j] = '.'
        }
        for (var k = -i; k <= i; k += 2) {
            arr[(((cols - 1) / 2) + 1) + k] = '0';
        }
        for (var l = 1; l < arr.length; l++) {
            str = str + arr[l]
        }
        console.log(str);
    }
}

function inverse_pyramid(rows) {
    var cols = 2 * rows + 1; //total columns
    for (var i = rows - 1; i >= 0; i--) {
        var str = '';
        var arr = [];
        for (var j = 1; j <= cols; j++) {
            arr[j] = '.'
        }
        for (var k = -i; k <= i; k += 2) {
            arr[(((cols - 1) / 2) + 1) + k] = '0';
        }
        for (var l = 1; l < arr.length; l++) {
            str = str + arr[l]
        }
        console.log(str);
    }
}

function rhombus(rows) {
    //pyramid
    var cols = 2 * rows + 1; //total columns
    for (var i = 0; i < rows; i++) {
        var str = '';
        var arr = [];
        for (var j = 1; j <= cols; j++) {
            arr[j] = '.'
        }
        for (var k = -i; k <= i; k += 2) {
            arr[(((cols - 1) / 2) + 1) + k] = '0';
        }
        for (var l = 1; l < arr.length; l++) {
            str = str + arr[l]
        }
        console.log(str);
    }
    //inverse pyramid
    for (var i = rows - 2; i >= 0; i--) {
        var str = '';
        var arr = [];
        for (var j = 1; j <= cols; j++) {
            arr[j] = '.'
        }
        for (var k = -i; k <= i; k += 2) {
            arr[(((cols - 1) / 2) + 1) + k] = '0';
        }
        for (var l = 1; l < arr.length; l++) {
            str = str + arr[l]
        }
        console.log(str);
    }
}

// pyramid(6);

// inverse_pyramid(4);

rhombus(4);