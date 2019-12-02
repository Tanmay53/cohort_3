var btn;
var arr1 = [];
var avg = 0;
var dataBox = document.querySelector(".showData");
var name;
var total = 0;
btn = document.getElementById("Sbutton");
var submit = document.getElementById("info");
function submitData() {
  var name = document.getElementById("fname").value;
  var grade = document.getElementById("fGrade").value;
  var science = document.getElementById("fSci").value;
  var maths = document.getElementById("fMath").value;
  var eng = document.getElementById("fEng").value;
  var hist = document.getElementById("fHis").value;
  var geo = document.getElementById("fGeo").value;
  var stdObj = {
    Name: name,
    Grade: grade,
    Science: science,
    Maths: maths,
    Eng: eng,
    His: hist,
    Geo: geo,
    sum:
      Number(science) + Number(maths) + Number(eng) + Number(hist) + Number(geo)
  };
  arr1.push(stdObj);
  alert("Submitted");

  // Creating Element
  // var paraGrade = document.createElement("p");
  // Insert Text
  // paraGrade.innerText = "Grade  is :" + grade;
  // paraMarks.innerText = name;
  // Append Child
  // dataBox.appendChild(paraMarks);
  // dataBox.appendChild(paraGrade);
}
btn.addEventListener("click", submitData);
var read = "";
// Showing the data
function profile() {
  arr1.forEach(function(ele) {
    console.log(ele);
    total += parseInt(ele.sum);
    avg = total / 5;
    console.log(parseInt(avg), parseInt(total));
    var tr = document.createElement("tr");
    var tdname = document.createElement("td");
  });
}
submit.addEventListener("click", profile);
