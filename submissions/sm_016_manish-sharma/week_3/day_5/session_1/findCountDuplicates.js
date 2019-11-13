//Object
var findCount = {
    duplicates: function (array, ch) {
        var cnt = 0
        for (i = 0; i < array.length; i++) {
            if (ch === array[i]) {
                cnt++
            }
        }
        console.log(cnt)
    }
}

//calling function

findCount.duplicates(['a', '2', 'y', '2', 'x', 'a', 'b', 'm'],'2')
findCount.duplicates(['a', '2', 'y', '2', 'x', 'a', 'b', 'm'],'w')