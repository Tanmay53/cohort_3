    var a = [1, 5, 3]
    var b = [3, 3, 6]
    var arr = []

    function intersectionArrays(a, b) {

        for (var i = 0; i < a.length; i++) {
            for (var j = 0; j < b.length; j++) {
                if (a[i] == b[j]) {
                    arr.push(a[i])
                    break;
                }
            }
        }
        console.log(arr)

    }
    intersectionArrays(a, b)