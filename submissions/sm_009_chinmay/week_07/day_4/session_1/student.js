class Student {
    // Take name, email and phone as input arguments and fill it with invalid if no argument is passed
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    //  take's multiple inputs, and assign all of this into a variable marks in the class
    assignMarks(...marks) {
        this.marks = marks;
    }
    // checks highest mark and returns the value
    highestMarks() {    
        var sortMarks = this.marks.sort( (a,b) => a-b);
        return (sortMarks[sortMarks.length-1]);
    }
    // returns total no of subjects as response
    totalSubjects() {
        return this.marks.length;
    }
    // returns the marks as an array
    showMarks() {
        return this.marks;
    }
    // returns the average of the marks
    average() {
        return(
            (this.marks.sort( (a,b) => a+b))/this.totalSubjects()
        );
    }
    // returns the lowest marks
    low() {
        var sortMarks = this.marks.sort((a,b) => a-b);
        return (sortMarks[0]);
    }
}