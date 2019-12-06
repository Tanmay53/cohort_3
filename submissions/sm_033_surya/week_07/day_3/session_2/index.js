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
    // console.log(out)
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
    out.reverse(function (a, b) {
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
function paging(data) {
    // console.log(data)
    $(".dataHolder").empty()
    var count = Number($(".units").val())
    // console.log(data.length)
    var arra = []
    var a = 0
    var pages = data.length / count
    for (i = 0; i < pages; i++) {
        arra = data.slice(a, a + count)
        a = a + count
        if (pages == 2) {
            $(".page0,.page1").show()
            $(".page2, .page3, .page4, .page5, .page6, .page7, .page8, .page9").hide()
        }
        if (pages == 4) {
            $(".page0,.page1 ,.page2, .page3").show()
            $(".page4, .page5, .page6, .page7, .page8, .page9").hide()
        }
        if (pages == 1) {
            $(".page0").show()
            $(".page1 ,.page2, .page3, .page4, .page5, .page6, .page7, .page8, .page9").hide()
        }
        if (pages == 10) {
            $(".page0,.page1 ,.page2, .page3, .page4, .page5, .page6, .page7, .page8, .page9").show()
        }
        var div = document.createElement("div")
        div.setAttribute("id", "tablediv" + i)
        div.setAttribute("class", "hidden")
        var table = document.createElement("table")
        table.setAttribute("class", "table table-striped")
        // table.setAttribute("class", "tableNo" + i)
        div.append(table)
        $(".dataHolder").append(div)
        var tr = document.createElement("tr")
        tr.innerHTML = "<tr><td>ID no</td> <td> First Name</td> <td> Last Name</td> <td>Gender</td> <td> Email</td> <td>English</td> <td>Maths</td> <td> Science</td><td>Total</td></tr>"
        table.append(tr)
        for (j = 0; j < arra.length; j++) {
            var tr = document.createElement("tr")
            tr.innerHTML = `<tr><td>${arra[j].id}</td> <td> ${arra[j].first_name}</td> <td> ${arra[j].last_name}</td> <td> ${arra[j].gender}</td> <td> ${arra[j].email}</td> <td> ${arra[j].english}</td> <td> ${arra[j].maths}</td> <td> ${arra[j].science}</td><td>${arra[j].total}</td></tr>`
            table.append(tr)
        }
        // console.log(arra)
    }
}

// pagination hide and show divs 
$(".page0").click(function () {
    // $("#tablediv1").css("background","red")
    $("#tablediv0").show()
    $("#tablediv1, #tablediv2,#tablediv3,#tablediv4, #tablediv5,#tablediv6,#tablediv7, #tablediv8,#tablediv9").hide()
})
$(".page1").click(function () {
    $("#tablediv1").show()
    $("#tablediv0, #tablediv2,#tablediv3,#tablediv4, #tablediv5,#tablediv6,#tablediv7, #tablediv8,#tablediv9").hide()
})
$(".page2").click(function () {
    $("#tablediv2").show()
    $("#tablediv1, #tablediv0,#tablediv3,#tablediv4, #tablediv5,#tablediv6,#tablediv7, #tablediv8,#tablediv9").hide()
})
$(".page3").click(function () {
    $("#tablediv3").show()
    $("#tablediv1, #tablediv2,#tablediv0,#tablediv4, #tablediv5,#tablediv6,#tablediv7, #tablediv8,#tablediv9").hide()
})
$(".page4").click(function () {
    $("#tablediv4").show()
    $("#tablediv1, #tablediv2,#tablediv3,#tablediv0, #tablediv5,#tablediv6,#tablediv7, #tablediv8,#tablediv9").hide()
})
$(".page5").click(function () {
    $("#tablediv5").show()
    $("#tablediv1, #tablediv2,#tablediv3,#tablediv4, #tablediv0,#tablediv6,#tablediv7, #tablediv8,#tablediv9").hide()
})
$(".page6").click(function () {
    $("#tablediv6").show()
    $("#tablediv1, #tablediv2,#tablediv3,#tablediv4, #tablediv5,#tablediv0,#tablediv7, #tablediv8,#tablediv9").hide()
})
$(".page7").click(function () {
    $("#tablediv7").show()
    $("#tablediv1, #tablediv2,#tablediv3,#tablediv4, #tablediv5,#tablediv6,#tablediv0, #tablediv8,#tablediv9").hide()
})
$(".page8").click(function () {
    $("#tablediv8").show()
    $("#tablediv1, #tablediv2,#tablediv3,#tablediv4, #tablediv5,#tablediv6,#tablediv7, #tablediv0,#tablediv9").hide()
})
$(".page9").click(function () {
    $("#tablediv9").show()
    $("#tablediv1, #tablediv2,#tablediv3,#tablediv4, #tablediv5,#tablediv6,#tablediv7, #tablediv8,#tablediv0").hide()
})
function hidder() {
    $(".dataHolder > div").hide()
}