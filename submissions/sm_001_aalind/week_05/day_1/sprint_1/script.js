var allRecords = {
    "Aalind Sharma": {
        Enrollment: 1,
        Name: "Aalind Sharma",
        Science: 100,
        Maths: 100,
        English: 95,
        History: 97,
        Geography: 89,
        Grade: "A"
    },
    "Rohan": {
        Enrollment: 2,
        Name: "Rohan",
        Science: 29,
        Maths: 67,
        English: 88,
        History: 90,
        Geography: 79,
        Grade: "B"
    }
};

var studentObj = {
    Enrollment: "",
    Name: "",
    Science: 0,
    Maths: 0,
    English: 0,
    History: 0,
    Geography: 0,
    Grade: ""
};

var errors = {
    rollNoErr: "",
    nameErr: "",
    sciErr: "",
    mathErr: "",
    engErr: "",
    histErr: "",
    geoErr: "",
};

function validateForm(obj) {
    if(obj["Enrollment"].length < 1) {
        errors.rollNoErr = "Invalid Roll No";
        return false;
    } else if(obj["Name"].length < 1 ) {
        errors.nameErr = "Invalid Name";
        return false;
    } else if(obj["Science"] > 100 || obj["Science"] < 0 || obj["Science"] === "") {
        errors.sciErr = "Invalid Marks";
        return false;
    } else if(obj["Maths"] > 100 || obj["Maths"] < 0 || obj["Maths"] === "") {
        errors.mathErr = "Invalid Marks";
        return false;
    } else if(obj["English"] > 100 || obj["English"] < 0 || obj["English"] === "") {
        errors.engErr = "Invalid Marks";
        return false;
    } else if(obj["History"] > 100 || obj["History"] < 0 || obj["History"] === "") {
        errors.histErr = "Invalid Marks";
        return false;
    } else if(obj["Geography"] > 100 || obj["Geography"] < 0 || obj["Geography"] === "") {
        errors.geoErr = "Invalid Marks";
        return false;
    }

    return true;
};

function addRow(obj) {
    var tr = document.createElement("tr");
    for(key in obj) {
        var td = document.createElement("td");
        td.textContent = obj[key];
        tr.appendChild(td)
    }

    return tr;
}

function submitBtn() {
    var newStudent = Object.create(studentObj);

    newStudent.Enrollment = document.getElementById('rollNo').value;
    newStudent.Name = document.getElementById('name').value;
    newStudent.Science = document.getElementById('science').value;
    newStudent.Maths = document.getElementById('maths').value;
    newStudent.English = document.getElementById('english').value;
    newStudent.History = document.getElementById('history').value;
    newStudent.Geography = document.getElementById('geography').value;

    if(!validateForm(newStudent)) {

        for(key in errors) {
            var span = document.getElementById(key);

            span.textContent = errors[key];
            errors[key] = "";
        }
        
        return;
    } else {
        for(key in errors) {
            var span = document.getElementById(key);
            
            errors[key] = "";
            span.textContent = errors[key];
        }
    }

    allRecords[newStudent.Name] = newStudent;

    displayRecords(allRecords);
}

function displayRecords(obj) {
    var resultDiv = document.getElementById("resultDiv");
    if(document.getElementById("displayTable") !== null) {
        resultDiv.removeChild(document.getElementById("displayTable"));
    }
    
    var table = document.createElement("table");
    table.setAttribute("id", "displayTable");
    table.innerHTML = "<tr>\
                    <th>Enrollment</th>\
                    <th>Name</th>\
                    <th>Science</th>\
                    <th>Maths</th>\
                    <th>English</th>\
                    <th>History</th>\
                    <th>Geography</th>\
                    <th>Grade</th>\
                    </tr>"
    resultDiv.appendChild(table);
    
    var displayTable = document.getElementById("displayTable");

    for(student in obj) {    
        var tr = document.createElement("tr");

        for(key in obj[student]) {
            var td = document.createElement("td");
            td.textContent = obj[student][key];
            tr.appendChild(td)
        }
        displayTable.appendChild(tr);
    }
}
displayRecords(allRecords)

function filter(e) {
    var filteredObj = {}
    for(student in allRecords) {
        if(allRecords[student]["Grade"] == e.value) {
            filteredObj[student] = allRecords[student];
        }
    }

    displayRecords(filteredObj)
}