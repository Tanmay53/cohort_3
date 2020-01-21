users = [{ name: 'venkat', password: 'abc123' },
{ name: 'nag', password: 'cba321' }];

function passwordVerify(x, y) {
    flag = 0
    for (i = 0; i < users.length; i++) {
        if (x == users[i].name) {
            if (y == users[i].password) flag = 1
        }
    }

    if (flag == 1) {
        console.log("Hello ", x)
    }
    else {
        console.log("Entered credintials are not correct.!")
    }
}
passwordVerify('venkat', 'abc123')