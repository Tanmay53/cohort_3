$("#page1").click(function () {
    $.ajax({
        type: "GET",
        url: "https://reqres.in/api/users?page=1",
    })
        .done(function (data) {
            console.log(data)
            displayData(data)
        })
})
$("#page2").click(function () {
    $.ajax({
        type: "GET",
        url: "https://reqres.in/api/users?page=2",
    })
        .done(function (data) {
            console.log(data)
            displayData(data)
        })
})
function displayData(data) {
    var table = document.querySelector(".tableForm")
    table.style.backgroundColor= "orange"

    var row1 = document.createElement("tr")
    table.appendChild(row1)
    var col1r1 = document.createElement("td")
    col1r1.style.backgroundColor= "red"

    col1r1.innerText = "ID"
    table.appendChild(col1r1)
    var col2r1 = document.createElement("td")
    col2r1.style.backgroundColor= "red"

    col2r1.innerText = "EMAIL"
    table.appendChild(col2r1)
    var col3r1 = document.createElement("td")
    col3r1.style.backgroundColor= "red"

    col3r1.innerText = "FIRST NAME"
    table.appendChild(col3r1)
    var col4r1 = document.createElement("td")
    col4r1.style.backgroundColor= "red"

    col4r1.innerText = "LAST NAME"
    table.appendChild(col4r1)
    var col5r1 = document.createElement("td")
    col5r1.style.backgroundColor= "red"

    col5r1.innerText = "AVATAR"
    table.appendChild(col5r1)
    for (var i = 0; i <data.data.length; i++) {
        var row2 = document.createElement("tr")

        table.appendChild(row2)
        var col1r2 = document.createElement("td")
        col1r2.innerHTML = data.data[i].id
        table.appendChild(col1r2)
        var col2r2 = document.createElement("td")
        col2r2.innerHTML = data.data[i].email
        table.appendChild(col2r2)
        var col3r2 = document.createElement("td")
        col3r2.innerHTML = data.data[i].first_name
        table.appendChild(col3r2)
        var col4r2 = document.createElement("td")
        col4r2.innerHTML = data.data[i].last_name
        table.appendChild(col4r2)
        var col5r2 = document.createElement("td")
        col5r2.innerHTML = data.data[i].avatar
        table.appendChild(col5r2)
    }
}
// function showData(data) {
//     var table = document.querySelector(".tableForm")

//     var row1 = document.createElement("tr")
//     table.appendChild(row1)
//     var col1r1 = document.createElement("td")
//     col1r1.innerText = "ID"
//     table.appendChild(col1r1)
//     var col2r1 = document.createElement("td")
//     col2r1.innerText = "EMAIL"
//     table.appendChild(col2r1)
//     var col3r1 = document.createElement("td")
//     col3r1.innerText = "FIRST NAME"
//     table.appendChild(col3r1)
//     var col4r1 = document.createElement("td")
//     col4r1.innerText = "LAST NAME"
//     table.appendChild(col4r1)
//     for (var i = 0; i < data.length; i++) {
//         var row2 = document.createElement("tr")
//         table.appendChild(row2)
//         var col1r2 = document.createElement("td")
//         col1r2.innerHTML = data[i].id
//         table.appendChild(col1r2)
//         var col2r2 = document.createElement("td")
//         col2r2.innerHTML = data[i].email
//         table.appendChild(col2r2)
//         var col3r2 = document.createElement("td")
//         col3r2.innerHTML = data[i].first_name
//         table.appendChild(col3r2)
//         var col4r2 = document.createElement("td")
//         col4r2.innerHTML = data[i].last_name
//         table.appendChild(col4r2)
//     }
// }