$("#os_select").click(function () {
    $.ajax({
        method: 'GET',
        url: 'http://localhost:8080/codenames/' + $("#os_select").val(),
    })
        .done(function (data) {
            process_data(data);
        });
});

function process_data(output) {
    output = JSON.parse(output)
    console.log(output)
    $("#show_data").text("")
    var tab = document.createElement('table')
    var row = document.createElement('tr')
    var col1 = document.createElement('th')
    col1.textContent = "VERSION"
    var col2 = document.createElement('th')
    col2.textContent = "NAME"
    row.append(col1, col2)
    tab.append(row)
    for (var i = 0; i < output["codenames"].length; i++) {
        var row = document.createElement('tr')
        var col_1 = document.createElement('td')
        col_1.textContent = output["codenames"][i].version
        var col_2 = document.createElement('td')
        col_2.textContent = output["codenames"][i].name
        row.append(col_1, col_2)
        tab.append(row)
    }
    $("#show_data").append(tab)
    tab.setAttribute('class','bg-info display-4 text-center mx-auto table thead-dark table-bordered rounded my-5')

}

