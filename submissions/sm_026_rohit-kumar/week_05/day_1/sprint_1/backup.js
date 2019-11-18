// global variables
var student = {}
var counter = 0

function clearInputs() {
    document.getElementById('txtName').value = ""
    document.getElementById('grade').value = "--"
    document.getElementById('txtMath').value = ""
    document.getElementById('txtScience').value = ""
    document.getElementById('txtEnglish').value = ""
    document.getElementById('txtGeography').value = ""
    document.getElementById('txtHistory').value = ""
}


function setValidGrades() {
    
}

function validate() {
    table = document.getElementById('display-table')
    
    txtName =  document.getElementById('txtName').value
    txtGrade = document.getElementById('grade').value
    txtMath =  document.getElementById('txtMath').value
    txtScience =  document.getElementById('txtScience').value
    txtEnglish =  document.getElementById('txtEnglish').value
    txtGeography = document.getElementById('txtGeography').value 
    txtHistory = document.getElementById('txtHistory').value 

        
    if(txtName == "" || txtGrade == "" || txtMath == "" || txtScience == "" 
                     || txtEnglish == "" || txtGeography == "" || txtHistory == "") {

        alert('All fields are mandatory. Please fill again !!')
        return
    }    
    

    // store in a object
    student[txtName] = {
            "grade"     : txtGrade,
            "math"      : Number(txtMath),
            "science"   : Number(txtScience),
            "english"   : Number(txtEnglish),
            "geography" : Number(txtGeography),
            "history"   : Number(txtHistory)
    }

    //increment the counter
    counter++
    alert('Record added successfully !!')
    clearInputs()
}




var temp_dict = {}

function update() {
    // local variables
    var totEnglish  = 0
    var totMath     = 0
    var totScience   = 0
    var totHistory   = 0
    var totGeography = 0

    for(x in student) {
        totEnglish = totEnglish + student[x]['english']
        totMath = totMath + student[x]['math']
        totScience = totScience + student[x]['science']
        totHistory = totHistory + student[x]['history']
        totGeography = totGeography + student[x]['geography']

        temp_dict['English'] = totEnglish
        temp_dict['Math'] = totMath
        temp_dict['Science'] = totScience
        temp_dict['History'] = totHistory
        temp_dict['Geography'] = totGeography
    }

    for(x in temp_dict) {
        var tableRow = document.createElement('tr')
        tableRow.innerHTML = '<td>' + x + ' </td> ' + '<td>' + temp_dict[x] 
                            + '</td>'  +  '<td>' +  temp_dict[x] / counter + '</td>'
        table.appendChild(tableRow)
    }
}