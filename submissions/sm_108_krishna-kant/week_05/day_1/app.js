var studentDetails = [];
var nameUI;
var standardUI;
var mathUI;
var scienceUI;
var englishUI;
var historyUI;
var geographyUI;
var addStudentUI;
var gradeUI;
// Initialize UI Variables
function initializeUi() {
  nameUI = document.querySelector("#name");
  standardUI = document.querySelector("#standard");
  mathUI = document.querySelector("#m");
  scienceUI = document.querySelector("#s");
  englishUI = document.querySelector("#e");
  historyUI = document.querySelector("#h");
  geographyUI = document.querySelector("#g");
  gradeUI = document.querySelector("#grade");
  addStudentUI = document.querySelector("#addStudent");
  tableUI = document.querySelector("#showData");
  showDataUI = document.querySelector("#showDatatable");
  showSumUI = document.querySelector("#showSum");
}

// Loading JS
document.addEventListener("DOMContentLoaded", function() {
  initializeUi();
  addStudentUI.addEventListener("click", createStudent);
  gradeUI.addEventListener("change", filterData);
  showSumUI.addEventListener("click", showSum);
});

// Creating Student
function createStudent(e) {
  e.preventDefault();
  var obj = {
    name: nameUI.value,
    standard: standardUI.value,
    math: mathUI.value | "0",
    science: scienceUI.value | "0",
    english: englishUI.value | "0",
    history: historyUI.value | "0",
    geography: geographyUI.value | "0",
    sum:
      (parseInt(mathUI.value) +
        parseInt(scienceUI.value) +
        parseInt(geographyUI.value) +
        parseInt(historyUI.value) +
        parseInt(englishUI.value)) |
      "0"
  };
  studentDetails.push(obj);
  showData(studentDetails);
}

// Filter Data
function filterData(e) {
  var grade = e.target.value;
  var filteredStudent = [];
  studentDetails.forEach(function(student) {
    if (student.standard.toLowerCase() == grade) {
      filteredStudent.push(student);
    }
  });
  if (grade == "all") {
    showData(studentDetails);
  } else {
    showData(filteredStudent);
  }
}

//Show Data
function showData(filterData) {
  var sumnum = 0;
  showDataUI.innerHTML = "";

  filterData.forEach(function(student) {
    var trow = document.createElement("tr");
    sum = 0;
    for (key in student) {
      var tbody = document.createElement("td");
      tbody.className = "tdata";
      tbody.innerText = student[key];
      trow.appendChild(tbody);
    }
    showDataUI.appendChild(trow);
  });

  filterData.forEach(function(ele) {
    sumnum += parseInt(ele.sum);
  });

  var avg = Math.round(sumnum / filterData.length) | "0";

  var trow = document.createElement("tr");
  var tbody = document.createElement("td");
  tbody.className = "tdata right";
  tbody.innerText = `Average for Class ${gradeUI.value} is : ${avg}`;
  trow.appendChild(tbody);
  showDataUI.appendChild(trow);
}
