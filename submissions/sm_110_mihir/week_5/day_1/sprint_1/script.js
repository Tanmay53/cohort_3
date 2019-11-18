arrStudents = [];
var form = document.getElementById("form");
form.addEventListener("submit", feed);
function feed(e) {
    e.preventDefault();
    var students = {
        name: form[0].value,
        grade: form[1].value,
        science: Number(form[2].value),
        math: Number(form[3].value),
        english: Number(form[4].value),
        history: Number(form[5].value),
        geography: Number(form[6].value)
    };
    arrStudents.push(students);

    console.log(arrStudents);
}

var selGrade = document.getElementById("selGrade");
selGrade.addEventListener("click", show);
function show() {
    var result = document.getElementById("result");
    var allChild = result.querySelectorAll("tr");
    // refresh result part
    allChild.forEach(function(ele) {
        result.removeChild(ele);
    });

    var total = 0,
        avg;
    arrStudents.forEach(function(obj) {
        total = 0;
        avg = 0;
        if (obj.grade == selGrade.value) {
            console.log("for grade :", selGrade.value);
            total +=
                obj.science +
                obj.math +
                obj.english +
                obj.history +
                obj.geography;
            avg = total / 5;
            console.log(total, avg);
            var tr = document.createElement("tr");
            var tdName = document.createElement("td");
            tdName.innerHTML = obj.name;
            var tdTotal = document.createElement("td");
            tdTotal.innerHTML = total;
            var tdAvg = document.createElement("td");
            tdAvg.innerHTML = avg;
            tr.appendChild(tdName);
            tr.appendChild(tdTotal);
            tr.appendChild(tdAvg);
            result.appendChild(tr);
            console.log(tr);
        }
    });
}
