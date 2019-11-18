var sum = 0;
var avg = 0;
var arr = [];
var studentMarks = [];

function submitDetails() {
    var name = document.getElementById("name").value;
    var grade = document.getElementById("grade").value;
    // console.log(name, grade);
    var scienceMarks = document.getElementById("science").value;
    var science = Number(scienceMarks);

    var mathMarks = document.getElementById("math").value;
    var math = Number(mathMarks);

    var englishMarks = document.getElementById("english").value;
    var english = Number(englishMarks);

    var historyMarks = document.getElementById("history").value;
    var history = Number(historyMarks);

    var geographyMarks = document.getElementById("geography").value;
    var geography = Number(geographyMarks);

    sum = science + math + english + history + geography;
    avg = sum / 5;
    console.log("sum = " + sum + " " + "Avg = " + avg);

    arr.push(name);
    arr.push(grade);
    arr.push(science);
    arr.push(math);
    arr.push(english);
    arr.push(history);
    arr.push(geography);
    arr.push(sum);
    arr.push(avg);
    studentMarks.push(arr)

    console.log(arr)
    console.log(studentMarks)

    for (var i = 0; i < studentMarks.length; i++) {
        if (studentMarks[i][0] == name) {
            console.log("dgjiso" + studentMarks[i])
            // alert("Same Name Entery Found For Same Class ... !!!")
        }
    }

    // show() //Calling show function
}

// Show function for sttudent marks
function show() {
    var name = document.getElementById("name").value;
    var grade = document.getElementById("grade").value;

    var scienceMarks = document.getElementById("science").value;
    var mathMarks = document.getElementById("math").value;
    var englishMarks = document.getElementById("english").value;
    var historyMarks = document.getElementById("history").value;
    var geographyMarks = document.getElementById("geography").value;


    var tableElement = document.createElement("table");
    var outputDiv = document.getElementById("output");

    tableElement.innerHTML = "<tr>" + "<td>" + "<h2>" + "Marks Details" + "</h2>" + "</td>" + "</tr>" +
        "<tr>" + "<td>" + "Name :" + "<td>" + name + "</td>" + "</td>" + "</tr>" +
        "<tr>" + "<td>" + "Grade/Standard :" + "<td>" + grade + "</td>" + "</td>" + "</tr>" +
        "<tr>" + "<td>" + "Science :" + "<td>" + scienceMarks + "</td>" + "</td>" + "</tr>" +
        "<tr>" + "<td>" + "Math :" + "<td>" + mathMarks + "</td>" + "</td>" + "</tr>" +
        "<tr>" + "<td>" + "English :" + "<td>" + englishMarks + "</td>" + "</td>" + "</tr>" +
        "<tr>" + "<td>" + "History :" + "<td>" + historyMarks + "</td>" + "</td>" + "</tr>" +
        "<tr>" + "<td>" + "Geography :" + "<td>" + geographyMarks + "</td>" + "</td>" + "</tr>" +
        "<tr>" + "<td>" + "Total Marks :" + "<td>" + sum + "</td>" + "</td>" + "</tr>" +
        "<tr>" + "<td>" + "Average :" + "<td>" + avg + "</td>" + "</td>" + "</tr>";
    outputDiv.appendChild(tableElement)
}