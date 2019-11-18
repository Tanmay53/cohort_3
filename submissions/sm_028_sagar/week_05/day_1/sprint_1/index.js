//student name array
var submit = document.getElementById('submit');


var student_arr = [];
id = 0;

submit.addEventListener('click', add_detail);
index = 0;


//function to add details
function add_detail() {

    //student_details
    var student_name = document.getElementById('name').value;
    var student_grade = document.getElementById('grade').value;

    //marks
    var science = Number(document.getElementById('science').value);
    var maths = Number(document.getElementById('maths').value);
    var english = Number(document.getElementById('english').value);
    var st_history = Number(document.getElementById('history').value);
    var geography = Number(document.getElementById('geography').value);

    id = index;
    index = {};

    index['name'] = student_name;
    index['grade'] = student_grade;
    index['science'] = science;
    index['maths'] = maths;
    index['english'] = english;
    index['history'] = st_history;
    index['geography'] = geography;

    student_total_marks(index);

    student_arr.push(index)


    // console.log('length of array ', student_arr.length);
    console.log('arr ', student_arr)

    id += 1;
}


//function to calculate total mark and average of student
function student_total_marks(index) {
    var total_mark = 0;
    total_mark = index.science + index.maths + index.english + index.history + index.geography;
    average = total_mark / 5;
    index['total_mark'] = total_mark;
    index['average'] = average;
    // console.log("total_mark ", total_mark, " average ", average)
}


// --------------------------------------------------------- 
//grade_check
var grade_check = document.getElementById('grade_check');
grade_check.addEventListener('click', show_updated_db);


//function to show student according to grade
function show_updated_db() {
    var check_grade = document.getElementById('student_grade').value;
    for (var i = 0; i < student_arr.length; i++) {
        if (check_grade === student_arr[i].grade) {
            // console.log(student_arr[i]);
            append_student_detail(student_arr[i])

        }
    }
}


//function to append student grade
function append_student_detail(obj) {
    var div_name = document.getElementById('append_name');

    var name = document.createElement('p');
    name.textContent = obj.name;
    div_name.appendChild(name)
        // ---------------------------------- 
    var div_science = document.getElementById('append_science');
    var science = document.createElement('p');
    science.textContent = obj.science;
    div_science.appendChild(science);
    // ---------------------------------- 
    var div_maths = document.getElementById('append_maths');
    var maths = document.createElement('p');
    maths.textContent = obj.maths;
    div_maths.appendChild(maths);
    // ---------------------------------- 
    var div_english = document.getElementById('append_english');
    var english = document.createElement('p');
    english.textContent = obj.english;
    div_english.appendChild(english);
    // ---------------------------------- 
    var div_history = document.getElementById('append_history');
    var history = document.createElement('p');
    history.textContent = obj.history;
    div_history.appendChild(history);
    // ---------------------------------- 
    var div_geography = document.getElementById('append_geography');
    var geography = document.createElement('p');
    geography.textContent = obj.geography;
    div_geography.appendChild(geography);
    // ---------------------------------- 
    var div_total_marks = document.getElementById('append_total_marks');
    var total_marks = document.createElement('p');
    total_marks.textContent = obj.total_mark;
    div_total_marks.appendChild(total_marks);
    // ---------------------------------- 
    var div_avg = document.getElementById('append_avg');
    var avg = document.createElement('p');
    avg.textContent = obj.average;
    div_avg.appendChild(avg);
    // ---------------------------------- 
    var div_grade = document.getElementById('append_grade');
    var grade = document.createElement('p');
    grade.textContent = obj.grade;
    div_grade.appendChild(grade);
}



//reset appended output
var reset = document.getElementById('grade_reset');
reset.addEventListener('click', remove_student_detail);

function show_reseted_db() {
    var check_grade = document.getElementById('student_grade').value;
    for (var i = 0; i < student_arr.length; i++) {
        if (check_grade === student_arr[i].grade) {
            reset_student_detail(student_arr[i])
        }
    }
}