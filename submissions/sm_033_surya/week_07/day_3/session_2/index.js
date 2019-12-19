var data
window.addEventListener('load', function () {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://localhost:8000/students')
    xhr.onload = function () {
        var data = xhr.response
        getData(data)
    }
    xhr.send()
})
function getData(data) {
    var out = JSON.parse(data)
    var x = 0
    for (i = 0; i < out.length; i++) {
        out[i].total = out[i].science + out[i].maths + out[i].english
    }
    $(".list").click(function (e) {
        display(e.target.id, out)
    })
    $(".test").click(function () {
        paging(out)
    })
    $(".sorting").click(function () {
        sorting(out)
    })
    $(".reversing").click(function () {
        reversing(out)
    })
    $(".sortingTotal").click(function () {
        sortingTotal(out)
    })
    $(".reversingTotal").click(function () {
        reversingTotal(out)
    })
    $(".genderSelect").click(function () {
        filterGender(out)
    })
    $(".searchBtn").click(function () {
        var stringIn = $(".search").val()
        search(out, stringIn)
    })
    $(".searchBtnDomain").click(function () {
        var stringIn = $(".searchDomain").val()
        searchEmail(out, stringIn)
    })
    $(".searchBtnEmail").click(function () {
        var stringIn = $(".searchEmail").val()
        searchEmail(out, stringIn)
    })
    $(".dataHolder").empty()
    var table = document.createElement("table")
    table.setAttribute("class", "table table-striped")
    var tr = document.createElement("tr")
    tr.innerHTML = "<tr><td>ID no</td> <td> First Name</td> <td> Last Name</td> <td>Gender</td> <td> Email</td> <td>English</td> <td>Maths</td> <td> Science</td><td>Total</td></tr>"
    table.append(tr)
    $(".dataHolder").append(table)
    for (i = 0; i < out.length; i++) {
        var tr = document.createElement("tr")
        tr.innerHTML = `<tr><td>${out[i].id}</td> <td> ${out[i].first_name}</td> <td> ${out[i].last_name}</td> <td> ${out[i].gender}</td> <td> ${out[i].email}</td> <td> ${out[i].english}</td> <td> ${out[i].maths}</td> <td> ${out[i].science}</td><td>${out[i].total}</td></tr>`
        table.append(tr)
    }
}


function sorting(out) {
    // console.log(out)
    out.sort((a, b) => (a.first_name > b.first_name) ? 1 : -1)
    $(".dataHolder").empty()
    var table = document.createElement("table")
    table.setAttribute("class", "table table-striped")
    var tr = document.createElement("tr")
    tr.innerHTML = "<tr><td>ID no</td> <td> First Name</td> <td> Last Name</td> <td>Gender</td> <td> Email</td> <td>English</td> <td>Maths</td> <td> Science</td><td>Total</td></tr>"
    table.append(tr)
    $(".dataHolder").append(table)
    for (i = 0; i < out.length; i++) {
        var tr = document.createElement("tr")
        tr.innerHTML = `<tr><td>${out[i].id}</td> <td> ${out[i].first_name}</td> <td> ${out[i].last_name}</td> <td> ${out[i].gender}</td> <td> ${out[i].email}</td> <td> ${out[i].english}</td> <td> ${out[i].maths}</td> <td> ${out[i].science}</td><td>${out[i].total}</td></tr>`
        table.append(tr)
    }
}
function reversing(out) {
    // paging(out)
    // console.log(out)
    out.sort((a, b) => (a.first_name > b.first_name) ? -1 : 1)
    $(".dataHolder").empty()
    var table = document.createElement("table")
    table.setAttribute("class", "table table-striped")
    var tr = document.createElement("tr")
    tr.innerHTML = "<tr><td>ID no</td> <td> First Name</td> <td> Last Name</td> <td>Gender</td> <td> Email</td> <td>English</td> <td>Maths</td> <td> Science</td><td>Total</td></tr>"
    table.append(tr)
    $(".dataHolder").append(table)
    for (i = 0; i < out.length; i++) {
        var tr = document.createElement("tr")
        tr.innerHTML = `<tr><td>${out[i].id}</td> <td> ${out[i].first_name}</td> <td> ${out[i].last_name}</td> <td> ${out[i].gender}</td> <td> ${out[i].email}</td> <td> ${out[i].english}</td> <td> ${out[i].maths}</td> <td> ${out[i].science}</td><td>${out[i].total}<td></tr>`
        table.append(tr)
    }
}
function sortingTotal(out) {
    out.sort(function (a, b) {
        return a.total - b.total
    })
    $(".dataHolder").empty()
    var table = document.createElement("table")
    table.setAttribute("class", "table table-striped")
    var tr = document.createElement("tr")
    tr.innerHTML = "<tr><td>ID no</td> <td> First Name</td> <td> Last Name</td> <td>Gender</td> <td> Email</td> <td>English</td> <td>Maths</td> <td> Science</td><td>Total</td></tr>"
    table.append(tr)
    $(".dataHolder").append(table)
    for (i = 0; i < out.length; i++) {
        var tr = document.createElement("tr")
        tr.innerHTML = `<tr><td>${out[i].id}</td> <td> ${out[i].first_name}</td> <td> ${out[i].last_name}</td> <td> ${out[i].gender}</td> <td> ${out[i].email}</td> <td> ${out[i].english}</td> <td> ${out[i].maths}</td> <td> ${out[i].science}</td><td>${out[i].total}</td></tr>`
        table.append(tr)
    }
}
function reversingTotal(out) {
    // console.log(out)
    out.sort(function (a, b) {
        return b.total - a.total
    })
    $(".dataHolder").empty()
    var table = document.createElement("table")
    table.setAttribute("class", "table table-striped")
    var tr = document.createElement("tr")
    tr.innerHTML = "<tr><td>ID no</td> <td> First Name</td> <td> Last Name</td> <td>Gender</td> <td> Email</td> <td>English</td> <td>Maths</td> <td> Science</td><td>Total</td></tr>"
    table.append(tr)
    $(".dataHolder").append(table)
    for (i = 0; i < out.length; i++) {
        var tr = document.createElement("tr")
        tr.innerHTML = `<tr><td>${out[i].id}</td> <td> ${out[i].first_name}</td> <td> ${out[i].last_name}</td> <td> ${out[i].gender}</td> <td> ${out[i].email}</td> <td> ${out[i].english}</td> <td> ${out[i].maths}</td> <td> ${out[i].science}</td><td>${out[i].total}</td></tr>`
        table.append(tr)
    }
}
function filterGender(out) {
    var arraFemale = []
    var arraMale = []
    // console.log(out[0].gender)
    for (i = 0; i < out.length; i++) {
        // console.log(out[0].gender)
        if (out[i].gender == "Female") {
            arraFemale.push(out[i])
        }
        else {
            arraMale.push(out[i])
        }
    }
    if ($(".genderSelect").val() == "male") {
        $(".dataHolder").empty()
        var table = document.createElement("table")
        table.setAttribute("class", "table table-striped")
        var tr = document.createElement("tr")
        tr.innerHTML = "<tr><td>ID no</td> <td> First Name</td> <td> Last Name</td> <td>Gender</td> <td> Email</td> <td>English</td> <td>Maths</td> <td> Science</td><td>Total</td></tr>"
        table.append(tr)
        $(".dataHolder").append(table)
        for (i = 0; i < arraMale.length; i++) {
            var tr = document.createElement("tr")
            tr.innerHTML = `<tr><td>${arraMale[i].id}</td> <td> ${arraMale[i].first_name}</td> <td> ${arraMale[i].last_name}</td> <td> ${arraMale[i].gender}</td> <td> ${arraMale[i].email}</td> <td> ${arraMale[i].english}</td> <td> ${arraMale[i].maths}</td> <td> ${arraMale[i].science}</td><td>${arraMale[i].total}</td></tr>`
            table.append(tr)
        }
    }
    else {
        $(".dataHolder").empty()
        var table = document.createElement("table")
        table.setAttribute("class", "table table-striped")
        var tr = document.createElement("tr")
        tr.innerHTML = "<tr><td>ID no</td> <td> First Name</td> <td> Last Name</td> <td>Gender</td> <td> Email</td> <td>English</td> <td>Maths</td> <td> Science</td><td>Total</td></tr>"
        table.append(tr)
        $(".dataHolder").append(table)
        for (i = 0; i < arraFemale.length; i++) {
            var tr = document.createElement("tr")
            tr.innerHTML = `<tr><td>${arraFemale[i].id}</td> <td> ${arraFemale[i].first_name}</td> <td> ${arraFemale[i].last_name}</td> <td> ${arraFemale[i].gender}</td> <td> ${arraFemale[i].email}</td> <td> ${arraFemale[i].english}</td> <td> ${arraFemale[i].maths}</td> <td> ${arraFemale[i].science}</td><td>${arraFemale[i].total}</td></tr>`
            table.append(tr)
        }
    }
}
function hidder() {
    $(".dataHolder > div").hide()
}
function getvalue(id, data) {
    // console.log(data,id)
}
function paging(data) {
    $(".pagination").empty()
    $(".dataHolder").empty()
    var units = $(".units").val()
    var pages = data.length / units
    for (i = 1; i <= pages; i++) {
        var li = document.createElement("li")
        li.innerHTML = i
        li.setAttribute("class", "page-link list")
        li.setAttribute("id", i)
        li.setAttribute("onClick", "getvalue(this.id,data`)")
        $(".pagination").append(li)

    }

}
function display(id, out) {
    $(".dataHolder").empty()
    // console.log(id, out)
    var units = Number($(".units").val())
    var a = (id * units) - units
    var b = a + units
    console.log(a, b)
    $(".dataHolder").empty()
    var table = document.createElement("table")
    table.setAttribute("class", "table table-striped")
    var tr = document.createElement("tr")
    tr.innerHTML = "<tr><td>ID no</td> <td> First Name</td> <td> Last Name</td> <td>Gender</td> <td> Email</td> <td>English</td> <td>Maths</td> <td> Science</td><td>Total</td></tr>"
    table.append(tr)
    $(".dataHolder").append(table)
    for (i = a; i < b; i++) {
        var tr = document.createElement("tr")
        tr.innerHTML = `<tr><td>${out[i].id}</td> <td> ${out[i].first_name}</td> <td> ${out[i].last_name}</td> <td> ${out[i].gender}</td> <td> ${out[i].email}</td> <td> ${out[i].english}</td> <td> ${out[i].maths}</td> <td> ${out[i].science}</td><td>${out[i].total}</td></tr>`
        table.append(tr)
    }
}
function search(out, stringIn) {
    $(".dataHolder").empty()
    // console.log(out)
    // var stringIn = $(".search").val()
    // console.log(stringIn)
    var table = document.createElement("table")
    table.setAttribute("class", "table table-striped")
    var tr = document.createElement("tr")
    tr.innerHTML = "<tr><td>ID no</td> <td> First Name</td> <td> Last Name</td> <td>Gender</td> <td> Email</td> <td>English</td> <td>Maths</td> <td> Science</td><td>Total</td></tr>"
    table.append(tr)
    $(".dataHolder").append(table)
    for (i = 0; i < out.length; i++) {
        if (out[i].first_name.includes(stringIn)) {
            console.log(out[i])
            var tr = document.createElement("tr")
            tr.innerHTML = `<tr><td>${out[i].id}</td> <td> ${out[i].first_name}</td> <td> ${out[i].last_name}</td> <td> ${out[i].gender}</td> <td> ${out[i].email}</td> <td> ${out[i].english}</td> <td> ${out[i].maths}</td> <td> ${out[i].science}</td><td>${out[i].total}</td></tr>`
            table.append(tr)
        }
    }
}
function searchEmail(out, stringIn) {
    $(".dataHolder").empty()
    // console.log(out)
    // var stringIn = $(".search").val()
    // console.log(stringIn)
    var table = document.createElement("table")
    table.setAttribute("class", "table table-striped")
    var tr = document.createElement("tr")
    tr.innerHTML = "<tr><td>ID no</td> <td> First Name</td> <td> Last Name</td> <td>Gender</td> <td> Email</td> <td>English</td> <td>Maths</td> <td> Science</td><td>Total</td></tr>"
    table.append(tr)
    $(".dataHolder").append(table)
    for (i = 0; i < out.length; i++) {
        if (out[i].email.includes(stringIn)) {
            // console.log(out[i])
            var tr = document.createElement("tr")
            tr.innerHTML = `<tr><td>${out[i].id}</td> <td> ${out[i].first_name}</td> <td> ${out[i].last_name}</td> <td> ${out[i].gender}</td> <td> ${out[i].email}</td> <td> ${out[i].english}</td> <td> ${out[i].maths}</td> <td> ${out[i].science}</td><td>${out[i].total}</td></tr>`
            table.append(tr)
        }
    }
}
