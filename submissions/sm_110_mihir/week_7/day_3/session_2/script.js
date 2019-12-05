// fetch json data
var students = [];
$(document).ready(function() {
    $.ajax({
        url: "./students.json"
    }).done(function(data) {
        students = data;

        printData(students);
    });
});
function printData(students, resultsPerPage = 10) {
    var pageno = 0,
        index;
    $("#pagenav").html("");
    while (pageno * resultsPerPage < students.length) {
        $("#pagenav").append(
            `<li class="page-item" id="page-${pageno}"><a class="page-link" href="#">${pageno +
                1}</a></li>`
        );

        $(`#page-${pageno}`).click(function() {
            var currPage = $(this).text();
            index = (currPage - 1) * resultsPerPage;
            console.log(index);
            $("tbody").html("");
            for (let i = 1; i <= resultsPerPage; i++) {
                let sum =
                    students[index].science +
                    students[index].maths +
                    students[index].english;
                students[index].total = sum;
                $("tbody").append(`<tr>
                                    <td>${students[index].id}</td>
                                    <td>${students[index].first_name}</td>
                                    <td>${students[index].last_name}</td>
                                    <td>${students[index].email}</td>
                                    <td>${students[index].gender}</td>
                                    <td>${students[index].english}</td>
                                    <td>${students[index].maths}</td>
                                    <td>${students[index].science}</td>
                                    <td>${students[index].total}</td>
                            </tr>`);
                index++;
            }
        });
        pageno++;
    }
}

// choosing results per page
$("#resultsPerPage").click(() => trigger());
function trigger() {
    var resultsPerPage = $("#resultsPerPage").val();
    printData(students, resultsPerPage);
}
// on click sort

$(".btn").click(function() {
    var sortID = $(this).attr("id");
    var parameter = sortID.split("-");
    console.log(parameter);
    sortStudets(parameter[1], parameter[2]);
});
function sortStudets(sortBy, order) {
    students.sort(compare);
    function compare(a, b) {
        const userA = a[sortBy];
        const userB = b[sortBy];
        let comparison = 0;
        if (order == "asc") {
            if (userA > userB) comparison = 1;
            else if (userA < userB) comparison = -1;
        } else if (order == "dsc") {
            if (userA > userB) comparison = -1;
            else if (userA < userB) comparison = 1;
        }
        return comparison;
    }
    console.log(students);
    // trigger
    $("#page-0").click();
}

// filter by gender
$("#gender").click(function() {
    var filteredStudents;
    var gender = $(this).val();
    if (gender == "all") filteredStudents = students;
    else {
        filteredStudents = students.filter(ele => ele.gender == gender);
    }
    console.log(filteredStudents);
    printData(filteredStudents);
    $("#page-0").click();
});
