class Student {
    constructor(name = "invalid", email = "invalid", phone = "invalid") {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    assignMarks(marks) {
        this.science = marks[0];
        this.maths = marks[1];
        this.english = marks[2];
        this.history = marks[3];
        this.geography = marks[4];
        this.compuer = marks[5];
        this.arr = marks.map(ele => Number(ele));
    }

    highestMarks() {
        let max = this.arr[0];
        this.arr.forEach(ele => {
            if (ele > max) max = ele;
        });
        return max;
    }

    totalSubjects() {
        let count = 0;
        this.arr.forEach(element => {
            count++;
        });
        return count;
    }
    showMarks() {
        return this.arr;
    }

    average() {
        let avg = this.arr.reduce((a, b) => a + b);
        avg = avg / this.arr.length;
        return avg;
    }
    low() {
        let low = this.arr.reduce((a, b) => (a < b ? a : b));
        return low;
    }
}

// var mihir = new Student("mihir", "mihir@gmail.com", "0987");
// mihir.assignMarks(80, 76, 90, 12, 87, 78);
// console.log(mihir.arr);
// console.log(mihir.highestMarks());
// console.log(mihir.totalSubjects());
// console.log(mihir.average());
// console.log(mihir.low());
var stud;
function createStuent() {
    event.preventDefault();
    // fetching data
    let name = $("#name").val();
    let email = $("#email").val();
    let phone = $("#phone").val();
    let science = $("#science").val();
    let math = $("#math").val();
    let english = $("#english").val();
    let history = $("#history").val();
    let geography = $("#geography").val();
    let cs = $("#cs").val();
    let marks = [science, math, english, history, geography, cs];
    // create student
    stud = new Student(name, email, phone);
    stud.assignMarks(marks);
    console.log(stud);
}

function highest() {
    display(stud.highestMarks());
}

function total() {
    display(stud.totalSubjects());
}
function avg() {
    display(stud.average());
}
function lowest() {
    display(stud.low());
}
function showMarks() {
    display(stud.showMarks());
}
function display(data) {
    $("#data").empty();
    $("#data").text(data);
}
