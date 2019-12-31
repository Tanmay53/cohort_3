class Student {
    constructor(name = "invvalid", email = "invalid", phone = "invalid") {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.marks = [];
    }

    //function  for assigning the marks
    assignMarks(...args) {
        args.forEach((ele) => this.marks.push(ele));
    }

    //function to  get the highest marks
    highestMarks() {
        let max = 0; // assuming marks cannot be negative
        this.marks.forEach((ele) => {
            if (ele > max)
                max = ele;
        });

        return max;
    }

    //function to return the total  number of subjects  
    totalSubjects() {
        return this.marks.length;
    }

    // function returns the marks as an array.
    showMarks() {
        return this.marks;
    }

    //function  to return the average
    average() {
        let average = this.marks.reduce((a, b) => a + b);
        return average;
    }

    //function  to  return  the lowest marks
    low() {
        let min = this.marks[0];
        this.marks.forEach(ele => {
            if (ele < min)
                min = ele
        });

        return min;
    }
}

/*
Tested Input:

var shivansh = new Student("Shivansh", "shivansh@gmail.com", "789454612");

console.log(shivansh);

shivansh.assignMarks(10, 20, 30, 40, 50);

console.log(shivansh.marks);


var highestMarks = shivansh.highestMarks();
console.log(highestMarks);

console.log(shivansh.totalSubjects());
console.log(shivansh.showMarks());
console.log(shivansh.average());
console.log(shivansh.low());

*/