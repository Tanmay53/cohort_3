function arydiff() {
    var arr1 = [2, 5, 7, 11, 13, 13, 15]
    var arr2 = [3, 8, 11, 14, 13]
    var res = []
    for (var i = 0; i < arr1.length; i++) {
      var  flag = true;
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                flag = false;
                break;
            }
        }
        if(flag == true){
            res.push(arr1[i])
        }
    }
    console.log(res)
}

arydiff()
