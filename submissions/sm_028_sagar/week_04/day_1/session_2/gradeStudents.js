var inp = [{
        name: "sagar",
        marks: 90
    },
    {
        name: "chinmay",
        marks: 70
    }
]

//invoking function 
console.log(grade(inp))

function grade(inp) {
    for (var i = 0; i < inp.length; i++) {
        var marks = inp[i].marks;
        //logic for grade
        var grade = checkGrade(marks)
        inp[i]['grade'] = grade;
    }
    return inp;
}


//checking for grade
function checkGrade(marks) {
    // switch (marks) {
    //     case (marks >= 90):
    //         console.log('check')
    //         return 'A';
    //     case (80 <= marks < 90):
    //         return 'B';
    //     case (60 <= marks < 80):
    //         return 'C';
    //     case (40 <= marks < 60):
    //         return 'D';
    //     case (marks < 40):
    //         return 'F';
    //     default:
    //         console.log('coming here', marks)
    // }

    if (marks >= 90) {
        return 'A'
    } else if (marks < 90 && marks >= 80) {
        return 'B'
    } else if (marks < 80 && marks >= 60) {
        return 'C'
    } else if (marks < 60 && marks >= 40) {
        return 'D'
    } else if (makrs < 40) {
        return 'F'
    }
}