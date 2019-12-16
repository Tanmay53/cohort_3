class Student {
    constructor(name="Invalid", email="Invalid", phone="Invalid") {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.marks = [];
    }

    assignMarks(args, ...arr) {
        this.marks.push(args);

        arr.forEach((element) => {
            this.marks.push(element);
        });

        return this.marks;
    }
    highestMarks() {
        return Math.max(...this.marks)
    }
    totalSubjects() {
        return this.marks.length;
    }
    showMarks() {
        alert(this.marks);
    }
    average() {
        let totalMarks = this.marks.reduce(function(total, element) {
            return total + element;
        }, 0);

        return (totalMarks/this.marks.length);
    }
    low() {
        return Math.max(this.marks);
    }
}

var aalind = new Student("Aalind", "aalind@gmail.com", 9999999999);

aalind.assignMarks(100,10,20,30,40);
console.log(aalind.highestMarks());
