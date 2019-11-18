function addStudent() {
  studentName = document.getElementById("studentName").value;
  standard = document.getElementById("standard").value;
  marks = document.querySelectorAll(".subject");
  totalMarks(marks);
  total = sum;
  math = document.getElementById("math").value;
  science = document.getElementById("science").value;
  english = document.getElementById("english").value;
  hst = document.getElementById("history").value;
  geography = document.getElementById("geography").value;
  pushElement();
}

function totalMarks(arr) {
  sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += Number(arr[i].value);
  }
}

// event

function pushElement() {
  stData = document.getElementById("studentData");
  record = document.createElement("tr");

  stName = document.createElement("td");
  stName.textContent = studentName;

  stndrd = document.createElement("td");
  stndrd.textContent = standard;

  sub1 = document.createElement("td");
  sub1.textContent = science;
  sub1.className = "scienceclass";

  sub2 = document.createElement("td");
  sub2.textContent = math;
  sub2.className = "mathclass";

  sub3 = document.createElement("td");
  sub3.textContent = english;

  sub4 = document.createElement("td");
  sub4.textContent = hst;

  sub5 = document.createElement("td");
  sub5.textContent = geography;

  tot = document.createElement("td");
  tot.textContent = total;

  allArr = [stName, stndrd, sub1, sub2, sub3, sub4, sub5, tot];
  for (var j = 0; j < allArr.length; j++) {
    record.appendChild(allArr[j]);
  }
  stData.appendChild(record);
}

changeEl = document.getElementById("gradeValue");
changeEl.addEventListener("change", changed);

//changed function
