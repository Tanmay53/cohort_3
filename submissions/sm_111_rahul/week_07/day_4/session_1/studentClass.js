class Student {
    constructor(name ='Invalid',email ='Invalid',phone ='Invalid'){
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.marks ={};
    }
    assignMarks(maths, english, science){
        this.marks.maths = maths,
        this.marks.english = english,
        this.marks.science = science
    }
    highestMarks(){
        var maxMarks = Math.max(this.marks.maths,this.marks.english,this.marks.science);
        return maxMarks;
    }
    totalSubjects(){
        var totalSubject = Object.keys(this.marks).length;
        return totalSubject;
    }
    showMarks(){
        var arr = [];
        arr = Object.entries(this.marks);
        return arr;
    }
    average(){
        var avg = (this.marks.science + this.marks.english + this.marks.maths)/3;
        return avg;
    }
    lowestMarks(){
        var lowMarks = Math.min(this.marks.maths,this.marks.english,this.marks.science);
        return lowMarks;
    }

}

var x  = new Student('Rahul', 'rahulkumarsharma3010@gmail.com', '8475949310');
x.assignMarks(75,65,90)
console.log(`Highest Marks = ${x.highestMarks()}`);
console.log(`Number of subjects = ${x.totalSubjects()}`);
console.log(`Marks in different Subjects: ${x.showMarks()}`);
console.log(`Average Marks = ${x.average().toFixed(2)}`);
console.log(`Lowest Marks =${x.lowestMarks()}`);