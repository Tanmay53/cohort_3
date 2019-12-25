class Student {
  constructor(name = "envalid", email = "envalid", phone = "envalid") {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
  assignMarks(eng, maths, sci, com, so_sci) {
    this.english = eng;
    this.maths = maths;
    this.science = sci;
    this.computer = com;
    this.social_science = so_sci;
  }
  highestMarks() {
    let arr = [
      this.english,
      this.maths,
      this.science,
      this.computer,
      this.social_science
    ];
    let max_mark = Math.max(...arr);
    return max_mark;
  }
  totalSubjects() {
    let arr = [
      this.english,
      this.maths,
      this.science,
      this.computer,
      this.social_science
    ];
    let subject = arr.length;
    return subject;
  }
  showMarks() {
    return [
      this.english,
      this.maths,
      this.science,
      this.computer,
      this.social_science
    ];
  }
  average() {
    let arr = [
      this.english,
      this.maths,
      this.science,
      this.computer,
      this.social_science
    ];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
  low() {
    let arr = [
      this.english,
      this.maths,
      this.science,
      this.computer,
      this.social_science
    ];
    let min_mark = Math.min(...arr);
    return min_mark;
  }
}

const stu1 = new Student("Suyash", "suyashmishra143143@gmail.com", 8643984343);
console.log(stu1.name);
console.log(stu1.email);
console.log(stu1.phone);

stu1.assignMarks(53, 70, 65, 32, 54);
console.log(stu1.highestMarks());
console.log(stu1.totalSubjects());
console.log(stu1.showMarks());
console.log(stu1.average());
console.log(stu1.low());
