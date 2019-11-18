function recordData() {
    var parent = document.querySelector('table');
    var Name = document.getElementById("name").value;
    var Grade = document.getElementById("grade").value;
    var Science = document.getElementById("science").value;
    var Maths = document.getElementById("maths").value;
    var English = document.getElementById("english").value;
    var History = document.getElementById("history").value;
    var Geography = document.getElementById("geography").value;
    var Sum = 0, Avg = 0
    var details = [Name, Grade, Science, Maths, English, History, Geography, Sum, Avg];
    var marks = [Science, Maths, English, History, Geography];

    convertMarks(marks)
    Sum = sumMarks(marks)
    Avg = Math.floor(Sum/5)
    details.push(Sum)
    details.push(Avg)
    alert(details.length)
    addStuds(details, parent)
}

function convertMarks(marks) {
    for(var i = 0; i < marks.length; i++)
        marks[i] = Number(marks[i])
}

function sumMarks(arr){
    var sum = 0
    for(var i = 0; i < arr.length; i++)
        sum += arr[i]
    return sum
}

function addStuds(details, parent) {
    for(var i = 0; i < details.length; i++){
        var tds = document.createElement("td");
        tds.textContent = details[i];
        parent.appendChild(tds);
    }
}
