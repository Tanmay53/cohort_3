// function to print pyramid

function pyramid(n) {

    for (let i = 1; i <= n; i++) {
        var str = "";
        // for loop for printing the space
        for (let j = 1; j <= n - i; j++) {
            str += " ";
        }

        //for loop for printing the pattern
        for (let k = 1; k <= i; k++) {
            str += "O ";
        }

        console.log(str);
    }

}

// pyramid(10);

//function  to  print the reverse pyramid
function reversePyramid(n) {

    //for printing number of rows
    for (let i = 1; i <= n; i++) {

        var str = "";
        //for printing the spaces
        for (let j = 1; j <= i - 1; j++) {
            str += " ";
        }

        //for printing the pattern
        for (let k = 1; k <= n + 1 - i; k++) {
            str += "O ";
        }
        console.log(str);
    }




}

// reversePyramid(5);

//function  to print Rhombus

function rhombus(n) {

    //for printing upper half
    for (let i = 1; i <= n; i++) {
        var str = "";

        //for printing the spaces
        for (let j = 1; j <= n - i; j++) {
            str += " ";
        }

        //for printing pattern
        for (let k = 1; k <= i; k++) {
            str += "* ";
        }

        console.log(str);
    }

    //lower half
    for (let i = 1; i < n; i++) {
        var str = "";

        //for printing the spaces
        for (let j = 1; j <= i; j++) {
            str += " ";
        }

        //for printing patter
        for (let k = 1; k <= n - i; k++) {
            str += "* ";
        }
        console.log(str);
    }
}

rhombus(10);