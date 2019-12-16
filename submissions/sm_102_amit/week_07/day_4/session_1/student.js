// add event listener to buttons
document.getElementById("saveStudent").addEventListener("click", () => {
  saveStudent();
});
document.getElementById("saveMarks").addEventListener("click", () => {
  addMarks();
});
document.getElementById("studentInfo").addEventListener("click", () => {
  getDetails();
});

// stydent array
let studentArr = [];

// student class
class Student {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.marks = [];
  }

  // function take multiple inputs, and assign all of this into a variable marks in the class
  assignMarks(maths, english, science) {
    this.marks.push({
      mathMarks: maths,
      englishMarks: english,
      scienceMarks: science
    });
  }

  // function to get student details
  studentDetails() {
    let box = document.getElementById("info");
    box.innerHTML = "";
    let info = `<div class="alert alert-success">
                  <h6 class="alert-heading">${this.name}</h6>
                  <ul class="list-unstyled">
                    <li>Email: ${this.name}</li>
                    <li>Phone: ${this.name}</li>
                    <li>Total Subjects: ${this.totalSubjects(this.marks)}</li>
                    <li>Highest Marks: ${this.highestMarks(this.marks)}</li>
                    <li>Lowest Marks: ${this.highestMarks(this.marks)}</li>
                  </ul>
                </div>`;
    box.innerHTML = info;
  }
  // function checks highest mark and returns the value
  highestMarks(marks) {
    let mark = Object.values(marks[0]).map(element => {
      return parseInt(element);
    });
    return Math.max(...mark);
  }

  // function returns total no of subjects as response
  totalSubjects(marks) {
    return marks[0].length;
  }

  // function returns the marks as an array
  showMarks() {}

  // function returns the average of the marks
  average(marks) {}

  // function return the lowest marks
  low() {
    let mark = Object.values(marks[0]).map(element => {
      return parseInt(element);
    });
    return Math.min(...mark);
  }
}

// function to create student object and add it to array
function saveStudent() {
  event.preventDefault();

  let name = document.getElementById("studentName").value;
  let email = document.getElementById("studentEmail").value;
  let phone = document.getElementById("studentPhone").value;

  let student = new Student(name, email, phone);
  studentArr.push(student);
  console.log(studentArr);
  createDropDown();
}

// function to add marks to selected student
function addMarks() {
  event.preventDefault();

  let student = document.getElementById("studentDropdown1").value;
  let maths = document.getElementById("maths").value;
  let english = document.getElementById("english").value;
  let science = document.getElementById("science").value;

  studentArr.forEach(element => {
    if (element.name == student) {
      element.assignMarks(maths, english, science);
    }
  });
}

// function to get student details
function getDetails() {
  event.preventDefault;

  let student = document.getElementById("studentDropdown1").value;

  studentArr.forEach(element => {
    if (element.name == student) {
      element.studentDetails();
    }
  });
}

// function to create dropdown
function createDropDown() {
  let option = "";
  option += `<option value="" selected disabled>select any student!</option>`;
  studentArr.forEach(element => {
    option += `<option value="${element.name}">${element.name}</option>`;
  });
  document.getElementById("studentDropdown1").innerHTML = option;
  document.getElementById("studentDropdown2").innerHTML = option;
}
