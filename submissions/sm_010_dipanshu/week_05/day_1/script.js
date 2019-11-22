var enterDataBtn = document.getElementById("enterDataBtn");
var createRecordBtn = document.getElementById("createRecordBtn");

enterDataBtn.addEventListener("click", enterStdData);
createRecordBtn.addEventListener("click", createStdRecord);

var studentRecords = [];

var stdName, stdGrade;
var mSci, mMaths, mEng, mHis, mGeo;
var mTotal, mAvg;

function enterStdData() {
  console.log("\nIn enterStdData function\n");

  stdName = document.getElementById("studentName").value;
  stdGrade = Number(document.getElementById("studentGrade").value);
  console.log("Student Name:", stdName);
  console.log("Student Grade:", stdGrade);

  console.log("Checking for input data validity now");

  if (checkInput(stdName, stdGrade)) {
    console.log("Checking for student data");
    if (checkStudentData(stdName, stdGrade)) {
      alert("Student data already exists.");
      console.log("Emptying input values");
      resetData();
    } else {
      console.log("Displaying marks div");
      displayMarksDiv();
    }
  } else {
    alert("Please enter valid data of student");
  }
}

function createStdRecord() {
  console.log("\nIn createRecord function\n");

  console.log("Getting student marks");
  getStudentMarks();

  console.log("Check input validity");
  if (checkMarksInput(mSci, mMaths, mEng, mHis, mGeo)) {
    console.log("Resetting all data");
    resetAllData();
    console.log("Cleared all data");

    createNewRecord(stdName, stdGrade, mSci, mMaths, mEng, mHis, mGeo);
    alert("Record Added Successfully");
    displayAllData();
  } else {
    alert("Invalid marks. Valid Range (0 - 100)");
  }
}

function checkInput(name, grade) {
  console.log("\nIn checkInput function\n");

  if (name != "" && grade != 0) {
    console.log("Good Inputs");
    return true;
  } else {
    console.log("Bad Inputs");
    return false;
  }
}

function checkStudentData(name, grade) {
  console.log("\nIn checkStudentData function\n");
  recordExists = false;

  console.log("Current Students", studentRecords.length);
  if (studentRecords.length > 0) {
    console.log(studentRecords);
    for (var h = 0; h < studentRecords.length; h++) {
      for (k = 0; k < 1; k++) {
        if (studentRecords[h][k] == name && studentRecords[h][k + 1] == grade) {
          recordExists = true;
        }
      }
    }
  }
  if (recordExists) {
    console.log("Student data already exists");
    return true;
  } else {
    console.log("Student data does not exist");
    return false;
  }
}

function resetData() {
  console.log("\nIn resetData function\n");
  document.getElementById("studentName").value = "";
  document.getElementById("studentGrade").value = "";
}

function displayMarksDiv() {
  console.log("\nIn displayMarksDiv function\n");

  marksDiv = document.getElementById("marksDiv");
  console.log("Making div visible");

  marksDiv.setAttribute("style", "visibility: visible");
}

function getStudentMarks() {
  console.log("\nIn getStudentMarks function\n");

  mSci = Number(document.getElementById("mScience").value);
  mMaths = Number(document.getElementById("mMaths").value);
  mEng = Number(document.getElementById("mEnglish").value);
  mHis = Number(document.getElementById("mHistory").value);
  mGeo = Number(document.getElementById("mGeography").value);

  console.log("Science", mSci);
  console.log("Maths", mMaths);
  console.log("English", mEng);
  console.log("History", mHis);
  console.log("Geography", mGeo);
}

function checkMarksInput(sci, maths, eng, his, geo) {
  console.log("\nIn checkMarksInput\n");

  if (
    sci < 0 ||
    sci > 100 ||
    maths < 0 ||
    maths > 100 ||
    eng < 0 ||
    eng > 100 ||
    his < 0 ||
    his > 100 ||
    geo < 0 ||
    geo > 100
  ) {
    console.log("Marks are invalid because they should be in the range 0-100");
    return false;
  } else {
    console.log("Valid marks input");
    return true;
  }
}

function resetAllData() {
  console.log("\nIn resetAllData\n");
  resetData();
  document.getElementById("mScience").value = "";
  document.getElementById("mMaths").value = "";
  document.getElementById("mEnglish").value = "";
  document.getElementById("mHistory").value = "";
  document.getElementById("mGeography").value = "";
}

function createNewRecord(name, grade, sci, maths, eng, his, geo) {
  console.log("\nIn create function\n");

  console.log("Hiding the marks div");
  hideMarksDiv();

  mTotal = sci + maths + eng + his + geo;
  console.log("Total marks of", name, mTotal);

  mAvg = mTotal / 5;
  console.log("Average of", name, mAvg);

  studentData = [];
  studentData.push(name);
  studentData.push(grade);
  studentData.push(sci);
  studentData.push(maths);
  studentData.push(eng);
  studentData.push(his);
  studentData.push(geo);
  studentData.push(mTotal);
  studentData.push(mAvg);

  console.log("The student data is", studentData);

  studentRecords.push(studentData);
  console.log("All student records are", studentRecords);
}

function hideMarksDiv() {
  console.log("\nIn hideMarksDiv function\n");

  marksDiv = document.getElementById("marksDiv");
  console.log("Making div invisible");

  marksDiv.setAttribute("style", "visibility: hidden");
}

function displayAllData() {
  var displayDataDiv = document.getElementById("displayDataDiv");
  console.log(displayDataDiv);

  var tbl = document.createElement("table");

  for (var g = 0; g < studentRecords.length; g++) {
    arr = [];
    name = studentRecords[g][0];
    arr.push(name);
    grade = studentRecords[g][1];
    arr.push(grade);
    sci = studentRecords[g][2];
    arr.push(sci);
    maths = studentRecords[g][3];
    arr.push(maths);
    eng = studentRecords[g][4];
    arr.push(eng);
    his = studentRecords[g][5];
    arr.push(his);
    geo = studentRecords[g][6];
    arr.push(geo);
    total = studentRecords[g][7];
    arr.push(total);
    avg = studentRecords[g][8];
    arr.push(avg);

    console.log(arr);

    tblRow = document.createElement("tr");

    for (var y = 0; y < 9; y++) {
      tblData = document.createElement("td");
      tblData.textContent = arr[y];
      tblRow.appendChild(tblData)
    }

    tbl.appendChild(tblRow);
  }

  displayDataDiv.appendChild(tbl)
}
