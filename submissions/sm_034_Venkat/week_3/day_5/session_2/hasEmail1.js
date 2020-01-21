if (emailCheck('mysite@masai.school.net') == true) console.log('Given email is vilid')
else console.log('Invilid mail Address')


function emailCheck(email) {
    if (checkChar(email) != true) {
        console.log(email, 'Invalid emailId-if-2')
        return false
    }
    else if (checkByForLoop(email) != true) {
        console.log(email, 'Invalid emailId-if-3')
        return false
    }
    else if (checkEnd(email) != true) {
        console.log(email, 'Invalid emailId-if-4')
        return false
    }
    else if (doubleEndCheck(email) != true) {
        console.log(email, 'Invalid emailId-if-5')
        return false
    }
    else {
        console.log(email)
        return true
    }
}


function checkByForLoop(x) {
    if (x[0] != '@'  && x[0] != '.' && x[0] != '-' && x[0] != '_') {
        var x2= x
        var c = 0
        var c2= 0
        for (i = 1; i < x.length - 4; i++) {
            if (x[i] == '@' && x[i+1] != '.') c++
            if (x2[i] == '.' && x2[i + 1] == '.') c2++
        }
        if (c == 1 && c2== 0) return true
        else console.log(c, 'if-3')
    }
}

function checkChar(w) {
    var all = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@-_.'
    var c = 0
    for (i = 0; i < w.length; i++) {
        for (j = 0; j < all.length; j++) {
            if (w[i] == all[j]) {
                c++
            }
            // console.log(c,'char')
        }
    }
    if (c == w.length) return true
    // else console.log(c)
}

function checkEnd(y) {
    var ly = y.length - 1
    if (y[ly - 3] + y[ly - 2] + y[ly - 1] + y[ly] === '.com' ||
        y[ly - 3] + y[ly - 2] + y[ly - 1] + y[ly] === '.net' ||
        y[ly - 3] + y[ly - 2] + y[ly - 1] + y[ly] === '.org') {
        return true
    }
}

function doubleEndCheck(z) {
    var c = 0
    for (i = 0; i < z.length; i++) {
        if (z[i] == '.') {
            if (z[i + 1] + z[i + 2] + z[i + 3] === 'com' ||
                z[i + 1] + z[i + 2] + z[i + 3] === 'org' ||
                z[i + 1] + z[i + 2] + z[i + 3] === 'net') {
                c++
                // console.log(c, z[i + 1] + z[i + 2] + z[i + 3])
            }
        }
    }
    if (c == 1) return true
}