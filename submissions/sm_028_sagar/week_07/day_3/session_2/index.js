let totalStudents = []
let backupArr = []
window.addEventListener('load', function() {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://localhost:8000/students')
    xhr.onload = function() {
        data = xhr.response
        totalStudents = JSON.parse(data); //making totalStudents as global variable
        backupArr = totalStudents
        console.log(totalStudents)
        totalMarks();
        pagination();
        displayTable();

    }

    xhr.send()
});

//Assigning total marks for each student in totalStudents 
function totalMarks(){
    for(let i = 0; i < totalStudents.length; i++){
        let totalMarks = addMarksTotal(totalStudents[i])
        totalStudents[i].total = totalMarks
    }
}

//function to display table for all students
//Main function to display table content --->
function displayTable(point = 1, num = 10) {

    $('#tbody').empty();

    // console.log(point, num)
    //start and end for point and num
    start = (point - 1) * num
    end = (start + (num - 1))
    let tbody = document.getElementById('tbody');

    for (let i = start; i <= end; i++) {
        if(totalStudents[i] == undefined){
            break
        }
        let tr = document.createElement('tr')
        let student = totalStudents[i];
        tr = appendEle(student,i)
        // let total = addMarksTotal(student); //calling for total marks function    
        // let td = document.createElement('td');
        // td.textContent = total;
        // tr.append(td)
        tbody.append(tr)
    }
}


//append element for student
function appendEle(singleStudent,i) {
    let tr = document.createElement('tr');
    for (key in singleStudent) {
        if (key === 'id') {
            let td = document.createElement('td');
            td.textContent = (i + 1);
            tr.append(td);
            continue;
        }
        let td = document.createElement('td');
        td.textContent = singleStudent[key];
        tr.append(td);
    }
    return tr;
}


//Adding total marks for science,maths,science
function addMarksTotal(studentObj) {
    let total = 0;
    // console.log(studentObj);
    total = studentObj.maths + studentObj.science + studentObj.english;
    return total;
}

//change page result per page
$('#results_per_page').change(function() {
    var num = Number($('#results_per_page').val());
    pagination(num)
    displayTable(1,num)
});

//append pagination according to selected number
function pagination(num=10) {
    let prev = 1

    $('.pagination').empty();

    let ul = $('.pagination');

    for (let i = 1; i <= Math.ceil(totalStudents.length / (num)); i++) {
        let li = document.createElement('li');
        if(i === 1){
            li.setAttribute('class', 'page-item hover active')
        }else{
            li.setAttribute('class', 'page-item hover')   
        }
      
        let a = document.createElement('a');
        a.setAttribute('class', 'page-link');
        li.setAttribute('id', i)
        a.textContent = i;
        li.addEventListener('click', function() {
            prevli = document.getElementById(prev)
            prevli.setAttribute('class','page-item')
            let point = Number(this.getAttribute('id'));
            this.setAttribute('class','page-item active')
            displayTable(point, num);
            prev = point
        })
        li.append(a);
        ul.append(li);
    }
}

//---------------------------------------------------------------------------------------------------

//adding click toggle listeners for ordered sorting
let clickFlag = true;

$('#first-name').click(()=>{
    if(clickFlag){
        clickFlag = false;
        totalStudents.sort((student1,student2) => student1.first_name > student2.first_name)
        displayTable()
    }else{
        clickFlag = true
        totalStudents.sort((student1,student2) => student1.first_name < student2.first_name)
        displayTable()
    }
})


$('#last-name').click(()=>{
    if(clickFlag){
        clickFlag = false;
        totalStudents.sort((student1,student2) => student1.last_name > student2.last_name)
        displayTable()
    }else{
        clickFlag = true
        totalStudents.sort((student1,student2) => student1.last_name < student2.last_name)
        displayTable()
    }
})


$('#email').click(()=>{
    if(clickFlag){
        clickFlag = false;
        totalStudents.sort((student1,student2) => student1.email > student2.email)
        displayTable()
    }else{
        clickFlag = true
        totalStudents.sort((student1,student2) => student1.email < student2.email)
        displayTable()
    }
})


let cnt = 1 //1:male,2:female 3:all

$('#gender').click(()=>{
    console.log(cnt)
    if(cnt == 1){
        cnt = 2
        totalStudents = backupArr.filter(student => student.gender == 'Male')
        displayTable()
        pagination()
    }else if(cnt == 2){
        cnt = 3
        totalStudents = backupArr.filter(student => student.gender == 'Female')
        displayTable()
        pagination()
    }else if(cnt==3){
        cnt = 1
        totalStudents = backupArr
        displayTable()
        pagination()
    }
})


$('#eng').click(()=>{
    if(clickFlag){
        clickFlag = false;
        totalStudents.sort((student1,student2) => student1.english - student2.english)
        displayTable()
    }else{
        clickFlag = true
        totalStudents.sort((student1,student2) => student2.english - student1.english)
        displayTable()
    }
})


$('#math').click(()=>{
    if(clickFlag){
        clickFlag = false;
        totalStudents.sort((student1,student2) => student1.maths - student2.maths)
        displayTable()
    }else{
        clickFlag = true
        totalStudents.sort((student1,student2) => student2.maths - student1.maths)
        displayTable()
    }
})


$('#sci').click(()=>{
    if(clickFlag){
        clickFlag = false;
        totalStudents.sort((student1,student2) => student1.science - student2.science)
        displayTable()
    }else{
        clickFlag = true
        totalStudents.sort((student1,student2) => student2.science - student1.science)
        displayTable()
    }
})


$('#total').click(()=>{
    if(clickFlag){
        clickFlag = false;
        totalStudents.sort((student1,student2) => student1.total - student2.total)
        displayTable()
    }else{
        clickFlag = true
        totalStudents.sort((student1,student2) => student2.total - student1.total)
        displayTable()
    }
})



// --------------------------------------------------------------------------------- 
//Exact Match
$('#check').click(()=>{
    console.log('check')
    let value = $('#search').val()
    let search = $('#text').val()
    search.trim()
    console.log(search)
    switch(value){
        case 'Name':
                totalStudents = backupArr.filter((a)=>{
                    let fname = a.first_name.toLowerCase().indexOf(search.toLowerCase()) //-1
                    let lname = a.last_name.toLowerCase().indexOf(search.toLowerCase()) //-1
                    return fname!=(-1) || lname!=(-1)
                });
                break
        case 'Email':  
                totalStudents = backupArr.filter((a)=>{
                    let email = a.email.toLowerCase() === search.toLowerCase()
                    return email;
                })
                break
        case 'Domain':
                totalStudents = backupArr.filter((a)=>{
                    let domain = a.email.split('@')[1] === search.toLowerCase()
                    return domain
                })
                break
    }
    displayTable()
})
$('#reset').click(()=>{
   totalStudents = backupArr
   displayTable()
})