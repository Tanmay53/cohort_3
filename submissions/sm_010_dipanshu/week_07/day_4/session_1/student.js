class student {
  constructor(name = "invalid", email = "invalid", phone = "invalid") {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.marks = [];
  }

  assignMarks(...args) {
    for (let i = 0; i < args.length; i++) {
      this.marks.push(args[i]);
    }
  }

  highestMarks() {
    console.log(
      this.marks.reduce(function(a, b) {
        return a > b ? a : b;
      })
    );
  }

  totalSubjects() {
    console.log(this.marks.length);
  }

  showMarks() {
    console.log(this.marks);
  }

  average() {
    let total = this.marks.reduce(function(a, b) {
      return a + b;
    });
    let subjects = this.marks.length;
    console.log(total / subjects);
  }

  low() {
    console.log(
      this.marks.reduce(function(a, b) {
        return a < b ? a : b;
      })
    );
  }
}

const dipanshu = new student("Dipanshu Sabharwal", "d@s.com", "12345");

dipanshu.assignMarks(10, 20, 30, 40, 50, 60);
dipanshu.highestMarks();
dipanshu.totalSubjects();
dipanshu.showMarks();
dipanshu.average();
dipanshu.low();
