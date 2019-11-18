var studentArr = []
var counter = -1

// Function Record Data
function recordData(){
 counter +=1
 var student = {};

var addName =
 document.getElementById("add-name").value

 var addGrade=
 document.getElementById("add-grade").value

 var addScience=
 document.getElementById("add-science-marks").value

 var addMaths =
 document.getElementById("add-maths-marks").value

 var addEnglish =
 document.getElementById("add-english-marks").value

 var addHistory =
 document.getElementById("add-history-marks").value

 var addGeography =
 document.getElementById("add-geography-marks").value

 var addTotal = parseInt(addScience)+parseInt(addMaths)+parseInt(addEnglish)+parseInt(addHistory)+parseInt(addGeography)

 var addAverage = addTotal/5

 student.name = addName
 student.grade = addGrade
 student.science = addScience
 student.maths = addMaths
 student.english = addEnglish
 student.history = addHistory
 student.geography = addGeography
 student.total = addTotal
 student.average = addAverage

studentArr.push(student)

// Invoking Generate table function
generateTable()

alert('New Record Successfully Added');

document.getElementById("add-name").value = ""
document.getElementById("add-grade").value = ""
document.getElementById("add-science-marks").value = ""
document.getElementById("add-maths-marks").value = ""
document.getElementById("add-english-marks").value = ""
document.getElementById("add-history-marks").value = ""
document.getElementById("add-geography-marks").value = ""

}

// Function for Table Generation 
function generateTable() {
 var body = document.getElementsByTagName("body")[0];

 var tbl = document.createElement("table");
 var tblBody = document.createElement("tbody");

 for (var i = 0; i < 1; i++) {

   var row = document.createElement("tr");

   for (var j = 0; j < 9; j++) {

     var cell = document.createElement("td");
     
     if(j==0){
      var cellText = document.createTextNode(studentArr[counter].name);
     }
     else if(j==1){
      var cellText = document.createTextNode(studentArr[counter].grade);
     }
     else if(j==2){
      var cellText = document.createTextNode(parseInt(studentArr[counter].science));
     }
     else if(j==3){
      var cellText = document.createTextNode(parseInt(studentArr[counter].maths));
     }
     else if(j==4){
      var cellText = document.createTextNode(parseInt(studentArr[counter].english));
     }
     else if(j==5){
      var cellText = document.createTextNode(parseInt(studentArr[counter].history));
     }
     else if(j==6){
      var cellText = document.createTextNode(parseInt(studentArr[counter].geography));
     }
     else if(j==7){
      var cellText = document.createTextNode(parseInt(studentArr[counter].average));
     }
     else if(j==8){
      var cellText = document.createTextNode(parseInt(studentArr[counter].total));
     }
     cell.appendChild(cellText);
     row.appendChild(cell);
   }

   tblBody.appendChild(row);
 }

 tbl.appendChild(tblBody);
 
 body.appendChild(tbl);
 
 tbl.setAttribute("border", "1");
}

function filterByGrade(){}