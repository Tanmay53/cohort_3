//Object 
var removing_duplicates = {
    fromArray: function (array) {
        var arr = []
        arr[0] = array[0]
        var cnt = 0
        for (i = 1; i < array.length; i++) {
            for (j = 0; j < arr.length; j++) {
                if (array[i] == arr[j]) {
                    cnt++
                }
                else {
                    cnt = cnt + 0
                }
            }
            if (cnt == 0) {
                arr.push(array[i])
                cnt = 0
            }
            else {
                cnt = 0
            }
        }
        console.log(arr)

    }
}
//calling function
removing_duplicates.fromArray(['a', 'b', 'c', 'a', 'd', 'e', 'e', 'g', 'b', 'a', 'm', 'i'])
