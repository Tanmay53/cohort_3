class Student {
  constructor(name = "invalid", email = "invalid", phone = "invalid") {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

class Person extends Student {
  constructor(math, eng, sci, history, name, email, phone) {
    super(name, email, phone);
    this.math = math;
    this.eng = eng;
    this.sci = sci;
    this.history = history;
    this.marks = [math, eng, sci, history];
  }
  highestMarks() {
    this.marks.sort(function(a, b) {
      return b - a;
    });
    return this.marks[0];
  }
  totalSubject() {
    return this.marks.lenght;
  }
  showMarks() {
    return this.marks;
  }
  average() {
    return (this.math + this.eng + this.sci + this.history) / 4;
  }
  low() {
    return this.marks.sort()[0];
  }
}
var newPerson = new Student("Soumik", "acharya266@gmail.com", "8910373618");

var soumik = new Person(
  30,
  20,
  10,
  40,
  "soumik",
  "soumik@masaischool.com",
  8910373618
);
// console.log(soumik);
console.log(soumik.average());
