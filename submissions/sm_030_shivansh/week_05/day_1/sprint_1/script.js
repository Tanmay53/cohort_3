var totalMarks = 0;
var avgMarks = 0;
//function to  store the data into  the table
function addToTable(name, grade, science, maths, english, history, geography, totalMarks, avgMarks) {
    var td1 = document.createElement("td");
    td1.textContent = name;
    var td2 = document.createElement("td");
    td2.textContent = grade;
    var td3 = document.createElement("td");
    td3.textContent = science;
    var td4 = document.createElement("td");
    td4.textContent = maths;
    var td5 = document.createElement("td");
    td5.textContent = english;
    var td6 = document.createElement("td");
    td6.textContent = history;
    var td7 = document.createElement("td");
    td7.textContent = geography;
    var td8 = document.createElement("td");
    td8.textContent = totalMarks;
    var td9 = document.createElement("td");
    td9.textContent = avgMarks;


    var parent = document.getElementById("start");

    parent.appendChild(td1);
    parent.appendChild(td2);
    parent.appendChild(td3);
    parent.appendChild(td4);
    parent.appendChild(td5);
    parent.appendChild(td6);
    parent.appendChild(td7);
    parent.appendChild(td8);
    parent.appendChild(td9);
}
//function to store student and calculate average and total marks
function stdData() {
    var name = document.getElementById("name").value;
    var grade = document.getElementById("grade").value;
    var maths = parseInt(document.getElementById("maths").value);
    var science = parseInt(document.getElementById("science").value);
    var english = parseInt(document.getElementById("english").value);
    var history = parseInt(document.getElementById("history").value);
    var geography = parseInt(document.getElementById("geography").value);

    totalMarks = maths + science + english + history + geography;
    avgMarks = totalMarks / 5;
    // console.log(total_marks);
    // console.log(avg_marks);
    document.getElementById("name").value = "";
    document.getElementById("grade").value = "";
    document.getElementById("science").value = "";
    document.getElementById("maths").value = "";
    document.getElementById("english").value = "";
    document.getElementById("history").value = "";
    document.getElementById("geography").value = "";
    addToTable(name, grade, science, maths, english, history, geography, totalMarks, avgMarks);
}