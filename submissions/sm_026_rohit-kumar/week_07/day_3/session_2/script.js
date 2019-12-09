// global vars
savedStudents = []
currentPage = 0


function initializeStudentData(data) {
    savedStudents = data
    
    // load table
    
    createPagination()
    preProcessSorting()
    //loadStudents(data)
}
function getStudentData() {
    return savedStudents
}


function searchRows(students, searchPram, searchVal) {
    if(searchVal == null)
        return students
    
    let key = ''
    if(searchPram == 'Firstname')
        key = 'first_name'
    else if(searchPram == 'Lastname')
        key = 'last_name'
    else if(searchPram == 'Email')
        key = 'email'
    else if(searchPram == 'Domain')
        key = 'email'


    switch(searchPram) {
        case 'Firstname':
        case 'Lastname':
        case 'Email':
            students = students.filter(function(student){
                return student[key].toLowerCase().indexOf(searchVal.toLowerCase()) >= 0
            }) 
            break
        case 'Domain':
            students = students.filter(function(student){
                return student[key].toLowerCase().split('@')[1] == searchVal.toLowerCase()
            }) 
    }

    return students   

}


function filterRows(students, gender) {
    if(gender == 'male' || gender == 'female')
        students = students.filter(stu => stu.gender.toLowerCase() == gender)
    
    return students
}

function sortEntries(students, parameter, type, order) {
    if(type == 'string') {
        students.sort((first, second) => {
            return first[parameter].toLowerCase().localeCompare(second[parameter].toLowerCase())
        }) 
    }
    else {
        students.sort((first, second) => {
            return Number(first[parameter]) - Number(second[parameter])
        }) 
    }

    if(order == 'desc')
        students.reverse()
    
    return students
    /* // load student into table

    loadStudents(students) */
}

function createPagination() {

    students = getStudentData()
    let entries = Number($('#entries').val())

    let totalPages = Math.floor(students.length / entries)

    // reset current page to 1
    currentPage = 1

    let pages = ''
    for(let i = 1; i <= totalPages; i++) {
        pages += `<button type="button" onclick="changePage('${i}')" class="btn btn-secondary">${i}</button>`
        
    }
    $('#paginationBar').html(pages)
    
}

function changePage(page) {
    currentPage = page
    preProcessSorting()
    
}   


function displayRangePagination(students, entries) {
    
    // currentPage is a global varibale
    let end = currentPage * entries
    let beg = end - entries
    
    return students.slice(beg, end)
}


function loadStudents(students) {
    var rows = ''
    
    for(let i = 0; i < students.length; i++) {
        rows = rows + `<tr>
                            <td>${i+1}</td>
                            <td>${students[i].id}</td>
                            <td>${students[i].first_name}</td>
                            <td>${students[i].last_name}</td>
                            <td>${students[i].email}</td>
                            <td>${students[i].gender}</td>
                            <td>${students[i].english}</td>
                            <td>${students[i].maths}</td>
                            <td>${students[i].science}</td>
                            <td>${students[i].science + students[i].maths + students[i].english}</td>
                        </tr>`
    }
 
    // apppend created rows at the end of table
    var table = `<table class='table table-striped table-bordered table-sm'>
                    <tr>
                        <th class='th-sm' scope='col'> S.No. </th>
                        <th class='th-sm' scope='col'> User ID </th>
                        <th class='th-sm' scope='col'> First name </th>
                        <th class='th-sm' scope='col'> Last name </th>
                        <th class='th-sm' scope='col'> Email </th>
                        <th class='th-sm' scope='col'> Gender </th>
                        <th class='th-sm' scope='col'> English </th>
                        <th class='th-sm' scope='col'> Maths </th>
                        <th class='th-sm' scope='col'> Science </th>
                        <th class='th-sm' scope='col'> Total </th>
                    </tr>
                    ${rows}
                 </table>`
    $('#display').html(table)
}

function getDataFromJSON() {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://localhost:8000/students')
    xhr.send()

    xhr.onload = () => {
                            if(xhr.status == 200)
                                initializeStudentData(JSON.parse(xhr.response))
                                //processData(JSON.parse(xhr.response))
                       } 
    
}

function preProcessSorting(searchPram = null, searchVal = null) {
    // search val is taken though a prompt and passed here
    // null is assigned to searchVal because this funtion is
    // called at multiple locations where searchVal may not be present

    let parameter = $('#parameter').val()
    let order = $('#order').val()
    let gender = $('#filter').val()
    let entries = Number($('#entries').val())
    let type = 'string'
   

    if(parameter == 'english' || parameter == 'maths' || parameter == 'science' || parameter == 'total') {
        type = 'number'
    }


    students = sortEntries(getStudentData(), parameter, type, order)
    students = filterRows(students, gender)
    if(searchPram != '--' || searchPram != null) {
        students = searchRows(students, searchPram, searchVal)
    }

    students = displayRangePagination(students, entries)
    loadStudents(students)

}


$('#search').change(function(){
    if ($('#search').val() == '--')
        return

    let str = "Please enter " + $('#search').val()
    let searchPram = $('#search').val()
    let searchVal =  prompt(str)
    searchVal = searchVal == "" ? undefined : searchVal

     
    preProcessSorting(searchPram, searchVal)
})

$('#parameter').change(function(){
    preProcessSorting()
})

$('#entries').change(function(){
    createPagination()
    preProcessSorting()
})

$('#order').change(function(){
    preProcessSorting()
})

$('#filter').change(function(){
    preProcessSorting()
})




function main() {
    
    getDataFromJSON()
}