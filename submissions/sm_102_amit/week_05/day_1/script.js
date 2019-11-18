var studentArr = [];
var marksTable = document.getElementById("marksTable");
function addStudent() {
  // form validation
  var name = document.getElementById("name");
  var grade = document.getElementById("grade");
  // check for empty field
  if (name.value == "" || grade.value == "") {
    alert("Enter student name first!");
    return false;
  }
  // get marks
  var marks = document.querySelectorAll(".marks-box input");
  var total = 0;
  for (var i = 0; i < marks.length; i++) {
    if (marks[i].value == "") {
      alert("Empty Marks Field!");
      return false;
    } else if (Number.isInteger(Number(marks[i].value)) == false) {
      alert("Enter valid marks!");
      return false;
    } else {
      total += parseInt(marks[i].value);
    }
  }

  var studentObj = {
    studentName: name.value,
    studentGrade: grade.value,
    scienceMarks: marks[0].value,
    mathsMarks: marks[1].value,
    englishMarks: marks[2].value,
    historyMarks: marks[3].value,
    geographyMarks: marks[4].value,
    totalMarks: total
  };

  studentArr.push(studentObj);
  console.log(studentArr);

  var emptyRow = document.createElement("tr");
  emptyRow.innerHTML =
    "<td>" +
    name.value +
    "</td>" +
    "<td>" +
    grade.value +
    "</td>" +
    "<td>" +
    marks[0].value +
    "</td>" +
    "<td>" +
    marks[1].value +
    "</td>" +
    "<td>" +
    marks[2].value +
    "</td>" +
    "<td>" +
    marks[3].value +
    "</td>" +
    "<td>" +
    marks[4].value +
    "</td>" +
    "<td><input type='hidden' class='total-marks' value='" +
    total +
    "' />" +
    total +
    "</td>";

  document.getElementById("marksTable").appendChild(emptyRow);
  empty();
}

// filter
function filterData() {
  document.getElementById("marksTable").innerHTML = "";
  var selectedGrade = event.target.value;
  studentArr.forEach(function(ele) {
    if (ele.studentGrade == selectedGrade) {
      var studentRow = addStudentRow(ele);
      document.getElementById("marksTable").appendChild(studentRow);
    }
  });
  var average = findAverage();
  document.getElementById("avgMarks").innerHTML = average;
}

// function to add student row in the table
function addStudentRow(student) {
  var emptyRow = document.createElement("tr");
  emptyRow.innerHTML =
    "<td>" +
    student.studentName +
    "</td>" +
    "<td>" +
    student.studentGrade +
    "</td>" +
    "<td>" +
    student.scienceMarks +
    "</td>" +
    "<td>" +
    student.mathsMarks +
    "</td>" +
    "<td>" +
    student.englishMarks +
    "</td>" +
    "<td>" +
    student.historyMarks +
    "</td>" +
    "<td>" +
    student.geographyMarks +
    "</td>" +
    "<td><input type='hidden' class='total-marks' value='" +
    student.totalMarks +
    "' />" +
    student.totalMarks +
    "</td>";
  return emptyRow;
}

// calculate average of students
function findAverage() {
  var totalSum = 0;
  var avgMarks = 0;
  var totalMarks = document.querySelectorAll(".total-marks");
  totalMarks.forEach(function(ele) {
    totalSum += parseInt(ele.value);
  });
  console.log(totalSum);
  avgMarks = Math.round(totalSum / totalMarks.length);
  return avgMarks;
}

// function empty form
function empty() {
  document.getElementById("name").value = "";
  var marks = document.querySelectorAll(".marks-box input");
  for (var i = 0; i < marks.length; i++) {
    marks[i].value = "";
  }
}
