
$("#page1").click(function () {
    $.ajax({
        type: 'GET',
        url: "https://jsonplaceholder.typicode.com/posts",
    })
        .done(function (data) {
            console.log(data)
            printData(data)
        })


})
$("#page2").click(function () {
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/posts",
    })
        .done(function (data) {
            console.log(data)
            displayData(data)
        })
})
function printData(data) {
    var table = document.querySelector(".tableForm")
    table.style.backgroundColor = "pink"

    var row1 = document.createElement("tr")
    table.appendChild(row1)
    var col1r1 = document.createElement("td")
    col1r1.innerText = " USERID"
    table.appendChild(col1r1)
    var col2r1 = document.createElement("td")
    col2r1.innerText = "ID"
    table.appendChild(col2r1)
    var col3r1 = document.createElement("td")
    col3r1.innerText = "TITLE"
    table.appendChild(col3r1)
    var col4r1 = document.createElement("td")
    col4r1.innerText = "BODY"
    table.appendChild(col4r1)
    for (var i = 0; i < data.length; i++) {
        var r2 = document.createElement("tr")
        table.appendChild(r2)
        var col1r2 = document.createElement("td")
        col1r2.innerHTML = data[i].userId
        table.appendChild(col1r2)
        var col2r2 = document.createElement("td")
        col2r2.innerHTML = data[i].id
        table.appendChild(col2r2)
        var col3r2 = document.createElement("td")
        col3r2.innerHTML = data[i].title
        table.appendChild(col3r2)
        var col4r2 = document.createElement("td")
        col4r2.innerHTML = data[i].body
        table.appendChild(col4r2)
    }
}

function displayData(data) {
    var table = document.querySelector(".tableForm")
    table.style.backgroundColor = "orange"

    var row1 = document.createElement("tr")
    table.appendChild(row1)
    var col1r1 = document.createElement("td")
    col1r1.innerText = " USERID"
    table.appendChild(col1r1)
    var col2r1 = document.createElement("td")
    col2r1.innerText = "ID"
    table.appendChild(col2r1)
    var col3r1 = document.createElement("td")
    col3r1.innerText = "TITLE"
    table.appendChild(col3r1)
    var col4r1 = document.createElement("td")
    col4r1.innerText = "BODY"
    table.appendChild(col4r1)
    for (var i = 0; i < data.length; i++) {
        var r2 = document.createElement("tr")
        table.appendChild(r2)
        var col1r2 = document.createElement("td")
        col1r2.innerHTML = data[i].userId
        table.appendChild(col1r2)
        var col2r2 = document.createElement("td")
        col2r2.innerHTML = data[i].id
        table.appendChild(col2r2)
        var col3r2 = document.createElement("td")
        col3r2.innerHTML = data[i].title
        table.appendChild(col3r2)
        var col4r2 = document.createElement("td")
        col4r2.innerHTML = data[i].body
        table.appendChild(col4r2)
    }
}
