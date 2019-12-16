$("#page1").click(function (data) {
    $.ajax({
        url: "https://reqres.in/api/users?page=1",
    })
        .done(function (data) {
            console.log(data);
            printData(data)
        });
})
$("#page2").click(function (data) {
    $.ajax({
        url: "https://reqres.in/api/users?page=2",
    })
        .done(function (data) {
            console.log(data);
            printData(data)
        });
})
function printData(data) {
    $(".tableForm").empty()
    $(".tableForm").css("background-color:danger")
    var tr = document.createElement("tr")
    var td = document.createElement("td")
    td.innerHTML = "ID"
    tr.appendChild(td)
    var td = document.createElement("td")
    td.innerHTML = "Email"
    tr.appendChild(td)
    var td = document.createElement("td")
    td.innerHTML = "First_Name"
    tr.appendChild(td)
    var td = document.createElement("td")
    td.innerHTML = "Last_Name"
    tr.appendChild(td)
    var td = document.createElement("td")
    td.innerHTML = "Avatar"
    tr.appendChild(td)
    $(".tableForm").append(tr)
    for (i = 0; i < data.data.length; i++) {
        var tr = document.createElement("tr")
        var td = document.createElement("td")
        td.innerHTML = data.data[i].id
        tr.appendChild(td)
        var td = document.createElement("td")
        td.innerHTML = data.data[i].email
        tr.appendChild(td)
        var td = document.createElement("td")
        td.innerHTML = data.data[i].first_name
        tr.appendChild(td)
        var td = document.createElement("td")
        td.innerHTML = data.data[i].last_name
        tr.appendChild(td)
        var td = document.createElement("td")
        var img = document.createElement("img")
        img.setAttribute("src", data.data[i].avatar)
        td.appendChild(img)
        tr.appendChild(td)
        $(".tableForm").append(tr)
    }
}