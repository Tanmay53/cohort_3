$(document).ready(function() {
    $("select").click(function() {
        console.log($("select").val());
        getOSData(printOSData, $("select").val());
    });
});

// GET
function getOSData(display, os) {
    $.ajax({
        url: "http://localhost:8080/codenames/" + os
    }).done(function(data) {
        console.log(data);
        display(JSON.parse(data));
    });
}

var printOSData = function(response) {
    console.log(response.codenames);
    var codenames = response.codenames;

    codenames.forEach(function(ele) {
        $("#body").append(
            "<tr>" +
                "<td>" +
                ele.version +
                "</td>" +
                "<td>" +
                ele.name +
                "</td>" +
                "</tr>"
        );
    });
};
