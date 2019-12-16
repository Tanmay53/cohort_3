function check(inp) {
    var counter = 0;
    var obj = {

        name: "div",
        email: "div@gmail",

    }

    for (key in obj) {
        if (key == inp) {
            counter++
        }
    }

    if (counter > 0) {
        console.log(true);
    } else {
        console.log(false)
    }
}

check("emais")

