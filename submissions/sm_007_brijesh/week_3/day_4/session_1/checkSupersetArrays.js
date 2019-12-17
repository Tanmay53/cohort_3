function supersetary() {
    var a = [1, 2, 3, 4, 5];
    var b = [4, 5];
    var flag = 0;
    // if (a.length < b.length) {

  //  }
    for (i = 0; i < a.length; i++) {

        for (j = 0; j < b.length; j++) {
            if (a[i] == b[j]) {
                flag++;
            }
        }
    }

        if (flag == b.length) {
            console.log("a is superset of b")
        }
        else {
            console.log("a is not superset of b")
        }

    }

supersetary()
