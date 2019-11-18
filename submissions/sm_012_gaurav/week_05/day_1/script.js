var bodyElem = document.querySelector('body');
var mainDiv = document.querySelector('.cont');
var subjects = ['science','math','english','history','geography'];
var studentsData = {'1':{},'2':{},'3':{},'4':{},'5':{},'6':{},'7':{},'8':{},'9':{},'10':{}};    //An object to store data of students standardwise.
/*An array of length 10 initially with all elements 0. It will help us
to create an id for each student which will help us to store data in particular grade.*/ 
var gradeSelectClickArray = [0,0,0,0,0,0,0,0,0,0];
var detailsButtonDiv = document.getElementById('details');

function bodyLoad() {
    var nameInput = document.createElement('input');
    nameInput.type = "text";
    nameInput.setAttribute('id','nameInput');
    nameInput.setAttribute('placeholder',"Enter Student's Name")
    var gradeSelect = document.createElement('select');
    gradeSelect.setAttribute('id','gradeSelect');
    var emptyOption = document.createElement("option");
    emptyOption.setAttribute('value','');
    emptyOption.textContent = "Select Grade";
    gradeSelect.appendChild(emptyOption);
    for (var i = 1; i <= 10; i++) {
        var option = document.createElement('option');
        option.setAttribute('value',i);
        option.textContent = i;
        gradeSelect.appendChild(option);
    }
    var div = document.createElement('div');
    div.appendChild(nameInput);
    div.appendChild(gradeSelect);
    mainDiv.appendChild(div);
    var btn = document.createElement('button');
    btn.setAttribute('class','outline');
    btn.setAttribute('id','addMarks');
    btn.textContent = "Enter Marks";
    btn.addEventListener('click',createMarksDiv);
    mainDiv.appendChild(btn);
}
bodyElem.onload = bodyLoad;

function createMarksDiv() {
    var name = document.getElementById('nameInput');
    var grade = document.getElementById('gradeSelect');
    if (name.value.trim().length == 0 || grade.value.length == 0) {
        alert("Please properly fill student's name and grade");
    }
    else {
        name.setAttribute('readonly',true);
        grade.setAttribute('disabled',true);
        for (var i = 0; i < subjects.length; i++) {
            var heading = document.createElement('h3');
            heading.setAttribute('id',subjects[i]+'h3');
            heading.textContent = "ENTER MARKS IN "+subjects[i].toUpperCase();
            var marksInput = document.createElement('input');
            marksInput.type = 'number';
            marksInput.id = subjects[i];
            marksInput.min = 0;
            marksInput.max = 100;
            marksInput.style.width = "5%";
            mainDiv.appendChild(heading);
            mainDiv.appendChild(marksInput);
        }
        var btn = document.createElement('button');
        btn.setAttribute('class', 'outline');
        btn.setAttribute('id','addStudentsData');
        btn.textContent = "Add Student's Data";
        btn.addEventListener('click',addStudentsData);
        mainDiv.appendChild(btn);
        mainDiv.removeChild(document.querySelector('#addMarks'));
    }
    if (document.getElementById('details') !== null) {
        mainDiv.removeChild(document.getElementById('details'));
    }
}

function addStudentsData() {
    var scienceMarks = document.getElementById('science').value;
    var mathMarks = document.getElementById('math').value;
    var englishMarks = document.getElementById('english').value;
    var historyMarks = document.getElementById('history').value;
    var geographyMarks = document.getElementById('geography').value;
    if (scienceMarks.length == 0 || mathMarks.length == 0 || englishMarks.length == 0 || historyMarks.length == 0 || geographyMarks == 0) {
        alert("Please Enter Marks in all the subjects.");
    }
    else {
        scienceMarks = Number(scienceMarks);
        mathMarks = Number(mathMarks);
        englishMarks = Number(englishMarks);
        historyMarks = Number(historyMarks);
        geographyMarks = Number(geographyMarks);
        if (scienceMarks < 0 || scienceMarks > 100 || mathMarks < 0 || mathMarks > 100 || englishMarks < 0 || englishMarks > 100 || historyMarks < 0 || historyMarks > 100 || geographyMarks < 0 || geographyMarks > 100) {
            alert("Please enter marks between 0 and 100");
        }
        else {
            var studentName = document.getElementById('nameInput').value.trim();
            var grade = document.getElementById('gradeSelect').value;
            gradeSelectClickArray[Number(grade) - 1]++;
            var stId = gradeSelectClickArray[Number(grade) - 1];
            studentsData[grade]['student'+stId] = {};
            var stIdData = studentsData[grade]['student'+stId];
            stIdData['studentName'] = studentName;
            stIdData['scienceMarks'] = scienceMarks;
            stIdData['mathMarks'] = mathMarks;
            stIdData['englishMarks'] = englishMarks;
            stIdData['historyMarks'] = historyMarks;
            stIdData['geographyMarks'] = geographyMarks;
            console.log(studentsData);
        }
    }
    mainDiv.removeChild(mainDiv.querySelector('div'));
    for (var i = 0; i < subjects.length; i++) {
        var h3 = document.getElementById(subjects[i]+'h3');
        var ip = document.getElementById(subjects[i]);
        mainDiv.removeChild(h3);
        mainDiv.removeChild(ip);
    }
    bodyLoad();
    mainDiv.removeChild(this);
    var div = document.createElement('div');
    div.setAttribute('id','details');
    var seeDetailsButton = document.createElement('button');
    seeDetailsButton.setAttribute('class','outline');
    seeDetailsButton.setAttribute('id','seeDetails');
    seeDetailsButton.textContent = "See Details of Students";
    seeDetailsButton.addEventListener('click', viewDetailsInTable);
    var seeAverageButton = document.createElement('button');
    seeAverageButton.setAttribute('class','outline');
    seeAverageButton.setAttribute('id','seeAverage');
    seeAverageButton.textContent = "See Total and Average Grade Wise";
    seeAverageButton.addEventListener('click',viewAverageGrade);
    div.appendChild(seeDetailsButton);
    div.appendChild(seeAverageButton);
    mainDiv.appendChild(div);
}

function viewDetailsInTable() {
    mainDiv.removeChild(mainDiv.querySelector('h1'));
    mainDiv.removeChild(mainDiv.querySelector('div'));
    mainDiv.removeChild(document.getElementById('addMarks'));
    var detailsDiv = document.getElementById('details');
    detailsDiv.removeChild(document.getElementById('seeDetails'));
    var div = mainDiv.querySelector('div');
    var gradeSelect = document.createElement('select');
    gradeSelect.setAttribute('id','gradeSelect');
    var emptyOption = document.createElement("option");
    emptyOption.setAttribute('value','');
    emptyOption.textContent = "Select Grade";
    gradeSelect.appendChild(emptyOption);
    for (var i = 1; i <= 10; i++) {
        var option = document.createElement('option');
        option.setAttribute('value',i);
        option.textContent = i;
        gradeSelect.appendChild(option);
    }
    mainDiv.insertBefore(gradeSelect, div);
    var submitButton = document.createElement('button');
    submitButton.setAttribute('id','submitButton');
    submitButton.setAttribute('class','outline');
    submitButton.textContent = "View Data";
    submitButton.addEventListener('click', viewTable);
    mainDiv.insertBefore(submitButton, div);
}

function viewAverageGrade() {

}

function viewTable() {
    var grade = document.getElementById('gradeSelect').value;
    if (grade.length == 0) {
        alert("Please Select the Grade.");
    }
    else {
        var s = '';
        if (Object.keys(studentsData[grade]).length == 0) {
            alert("No Data Related to this Grade.");
        }
        else {
            s = '<table><tr><td>Name</td><td>Science</td><td>Maths</td><td>English</td><td>History</td><td>Geography</td></tr>';
            for (key in studentsData[grade]) {
                s+=('<tr><td>'+studentsData[grade][key]['studentName']+'</td><td>'+studentsData[grade][key]['scienceMarks']+'</td><td>'
                +studentsData[grade][key]['mathMarks']+'</td><td>'+studentsData[grade][key]['englishMarks']+'</td><td>'+studentsData[grade][key]['historyMarks']+
                '</td><td>'+studentsData[grade][key]['geographyMarks']+'</td></tr>')
            }
            s += '</table>';
        }
        var div = document.createElement('div');
        div.innerHTML = s;
        mainDiv.insertBefore(div, document.getElementById('details'));
    }
}