// global variables
var student = {}
//var counter = 0
var totalRecords = 0


function recreateTable() {
    table = document.getElementById('display-table')
    allRows = document.querySelectorAll('tr')

    // leaving the initial table header and removing from 1
    for(var i = 1; i < allRows.length; i++) {
        table.removeChild(allRows[i])
    }
}

function clearInputs() {
    document.getElementById('txtName').value = ""
    document.getElementById('grade').value = "--"
    document.getElementById('txtMath').value = ""
    document.getElementById('txtScience').value = ""
    document.getElementById('txtEnglish').value = ""
    document.getElementById('txtGeography').value = ""
    document.getElementById('txtHistory').value = ""
}


function validate() {
    table = document.getElementById('display-table')
    

    // name serves as the key in the Object
    txtName =  document.getElementById('txtName').value
    txtGrade = document.getElementById('grade').value
    txtMath =  document.getElementById('txtMath').value
    txtScience =  document.getElementById('txtScience').value
    txtEnglish =  document.getElementById('txtEnglish').value
    txtGeography = document.getElementById('txtGeography').value 
    txtHistory = document.getElementById('txtHistory').value 

        
    if(txtName == "" || txtGrade == "--" || txtMath == "" || txtScience == "" 
                     || txtEnglish == "" || txtGeography == "" || txtHistory == "") {

        alert('All fields are mandatory. Please fill again !!')
        return
    }
    
    if(Number(txtMath) > 100 || Number(txtScience) > 100 || Number(txtEnglish) > 100 
                             || Number(txtGeography) > 100 || Number(txtHistory) > 100) {
        alert("Marks can't be greater than 100 !!")
        return
    }
    
    if(Number(txtMath) < 0 || Number(txtScience) < 0 || Number(txtEnglish) < 0 
                             || Number(txtGeography) < 0 || Number(txtHistory) < 0) {
        alert("Marks can't be less than 0 !!")
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
    //counter++
    alert('Record added successfully !!')
    clearInputs()
}


var temp_dict = {}
function update() {

    // basic sanitisation
    // hide and clear the table

    recreateTable()
    table.style.display = 'none'
    document.getElementById('msg').innerHTML = ""
    totalRecords = 0


    // local variables
    var totEnglish  = 0
    var totMath     = 0
    var totScience   = 0
    var totHistory   = 0
    var totGeography = 0


    var gradePick = document.getElementById('grade-pick')
    var gradeChosen = gradePick.value

    if(gradeChosen == '--') {
        return
    }

    // flag to keep track if there is any entry for grade selected
    var flag = false
    for(x in student) {
        if(gradeChosen == student[x]['grade']) {
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
            
            flag = true
            totalRecords++
        }      
    }

    // if flag is true dispaly table other wise display message in h2 i.e no record found.
    if(flag) {
        for(x in temp_dict) {
            var tableRow = document.createElement('tr')
            tableRow.innerHTML = '<td>' + x + ' </td> ' + '<td>' + temp_dict[x] 
                                + '</td>'  +  '<td>' +  (temp_dict[x] / totalRecords)  + '</td>'
            table.appendChild(tableRow)
        }
        table.style.display = 'block'
    }
    else{
        document.getElementById('msg').innerHTML = "No record found !"
    }
}