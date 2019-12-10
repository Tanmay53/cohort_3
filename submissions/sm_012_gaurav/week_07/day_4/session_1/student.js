class Student {
    constructor(name = "Invalid", email = "Invalid", phone = "Invalid") {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    assignMarks(...marks) {
        this.marks = marks;
    }

    highestMarks() {
        let max = this.marks[0];
        for (let i = 0; i < this.marks.length; i++) {
            if (this.marks[i]>max) {
                max = this.marks[i];
            }
        }
        console.log("Highest Marks are", max);
    }

    totalSubjects() {
        console.log(this.marks.length);
    }

    showMarks() {
        console.log(this.marks);
    }

    average() {
        let s = this.marks.reduce((a,b) => a+b, 0);
        console.log("Average Marks are", s/this.marks.length);
    }

    low() {
        let min = this.marks[0];
        for (let i = 0; i < this.marks.length; i++) {
            if (this.marks[i]<min) {
                min = this.marks[i];
            }
        }
        console.log("Lowest Marks are", min);
    }
}

let st = new Student("Abc", "fjldfs", "85239");
st.assignMarks(25,30,85,96,12);
st.highestMarks();
st.totalSubjects();
st.showMarks();
st.average();
st.low();