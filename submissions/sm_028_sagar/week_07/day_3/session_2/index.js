window.addEventListener('load', function() {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://localhost:8000/students')
    xhr.onload = function() {
        data = xhr.response
        totalStudents = JSON.parse(data); //making totalStudents as global variable
        console.log(totalStudents)

        displayTable();
    }

    xhr.send()
});



//function to display table for all students
//Main function to display table content --->
function displayTable(point = 1, num = 10, order = 'asc', gender = 'all') {

    sortedStudents = doOrder(order); //calling function ascending or descending

    $('#tbody').empty();


    console.log(point, num)
        //start and end for point and num
    start = (point - 1) * num
    end = (start + (num - 1))
    let tbody = document.getElementById('tbody');

    console.log(sortedStudents)
    for (let i = start; i <= end; i++) {

        if (sortedStudents[i]['gender'] === gender) {

        }


        let student = sortedStudents[i];
        let total = addMarksTotal(student); //calling for total marks function    
        let td = document.createElement('td');
        td.textContent = total;
        tr.append(td)
        tbody.append(tr)
    }
}


//append element
function appendEle(filteredStudentArr) {
    let tr = document.createElement('tr');
    for (key in sortedStudents[i]) {
        if (key === 'id') {
            let td = document.createElement('td');
            td.textContent = (i + 1);
            tr.append(td);
            continue;
        }
        let td = document.createElement('td');
        td.textContent = sortedStudents[i][key];
        tr.append(td);
    }
    return tr;
}



//order total students in ascending or descending manner
function doOrder(order) {
    let arr = []
    let sort_first = []
    for (let i = 0; i < totalStudents.length; i++) {
        sort_first[i] = totalStudents[i]['first_name'];
    }
    sort_first.sort();
    console.log(sort_first);

    if (order === 'asc') {
        //arranging arr ascending order
        for (let i = 0; i < sort_first.length; i++) {
            for (let j = 0; j < totalStudents.length; j++) {
                if (sort_first[i] === totalStudents[j].first_name) {
                    arr[i] = totalStudents[j]
                }
            }
        }
    } else if (order === 'desc') {
        //arranging as per desc order
        console.log('check')
        let length = sort_first.length;
        for (let i = (length - 1); i >= 0; i--) {
            for (let j = 0; j < totalStudents.length; j++) {
                if (sort_first[i] === totalStudents[j].first_name) {
                    arr[(length - 1) - i] = totalStudents[j]
                }
            }
        }
    }
    return arr;

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
});


//append pagination according to selected number
function pagination(num) {

    $('.pagination').empty();

    let ul = $('.pagination');

    for (let i = 1; i <= (totalStudents.length / (num)); i++) {
        let li = document.createElement('li');
        li.setAttribute('class', 'page-item')
        let a = document.createElement('a');
        a.setAttribute('class', 'page-link');
        a.setAttribute('point', i)
        a.textContent = i;
        a.addEventListener('click', function(ele) {
            let point = Number(this.getAttribute('point'));
            let order = $('#order').val();
            displayTable(point, num, order);
        })
        li.append(a);
        ul.append(li);
    }

}


//event listener to check ascending or descending of order                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
$('#order').change(() => {
    let order = $('#order').val();
    displayTable(1, 10, order)
})



//check gender
$('#gender').change(() => {
    let gender = $('#gender').val();
    let order = $('#order').val();
    displayTable(1, 10, order, gender)
})