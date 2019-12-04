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
    var pageno = 1,
        index = 0;
    $("#pagenav").html("");
    while (pageno * resultsPerPage <= students.length) {
        console.log(pageno);
        $("#pagenav").append(
            `<li class="page-item" id="page-${pageno}"><a class="page-link" href="#">${pageno}</a></li>`
        );

        $(`#page-${pageno}`).click(function() {
            $("tbody").html("");
            for (let i = 1; i <= resultsPerPage; i++) {
                let sum =
                    students[index].science +
                    students[index].maths +
                    students[index].english;
                $("tbody").append(`<tr>
                                    <td>${students[index].id}</td>
                                    <td>${students[index].first_name}</td>
                                    <td>${students[index].last_name}</td>
                                    <td>${students[index].email}</td>
                                    <td>${students[index].gender}</td>
                                    <td>${students[index].english}</td>
                                    <td>${students[index].maths}</td>
                                    <td>${students[index].science}</td>
                                    <td>${sum}</td>
                            </tr>`);
                index++;
            }
        });
        pageno++;
    }
}

// choosing results per page
$("#resultsPerPage").click(() => {
    var resultsPerPage = $("#resultsPerPage").val();
    printData(students, resultsPerPage);
});
