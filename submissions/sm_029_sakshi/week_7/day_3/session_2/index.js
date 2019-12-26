var data
window.addEventListener('load', function () {
    // console.log('loading')
    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://localhost:8000/students')
    xhr.onload = function () {
        data = xhr.response
        getData(data)
    }
    xhr.send()
})

// ===================tableeee======================

function getData(data) {
    output = JSON.parse(data)
    console.log(output)
    var x = 0
    for (i = 0; i < output.length; i++) {
        output[i].total = output[i].science + output[i].maths + output[i].english
    }
    //console.log(output[i].total)
    gettttt(output)

    $(".sorting").click(function () {
        sorting(output)
    })
    $(".reversing").click(function () {
        reverse(output)
    })
    $(".sortingTotal").click(function () {
        Markssort(output)
    })
    $(".reversingTotal").click(function () {
        Marksreverse(output)
    })
    $(".genderSelect").click(function () {
        filterGender(output)
    })
    $(".searchfirstname").click(function () {
        var stringfn = $(".search").val()
        searchfff(output, stringfn)
    })
    $(".searchlastname").click(function () {
        var stringln = $(".searchlast").val()
        searchlll(output, stringln)
    })
    $(".searchemail").click(function () {
        var stringem = $(".searchEmail").val()
        searchEmail(output, stringem)
    })
}

function sorting(output) {
    output.sort((a, b) => (a.first_name > b.first_name) ? 1 : -1)
    console.log(output)
    gettttt(output)
}


function reverse(output) {
    output.sort((a, b) => (a.first_name > b.first_name) ? -1 : 1)
    console.log(output)
    gettttt(output)
}


function Markssort(output) {
    output.sort(function (a, b) {
        return a.total - b.total
    })
    gettttt(output)
}

function Marksreverse(output) {
    output.sort(function (a, b) {
        return b.total - a.total
    })
    gettttt(output)
}


function filterGender(output) {
    arraFemale = []
    arraMale = []
    for (i = 0; i < output.length; i++) {
        if (output[i].gender == "Female") {
            arraFemale.push(output[i])
        }
        else if (output[i].gender == "Male") {
            arraMale.push(output[i])
        }

    }
    if ($(".genderSelect").val() == "male") {
        $(".dataHolder").empty()
        var table = document.createElement("table")
        table.setAttribute("class", "table table-striped table-danger")
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
        table.setAttribute("class", "table table-striped table-warning")
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


// =============================search firstname================================


function  searchfff(output, stringfn)
{
    $(".dataHolder").empty()

    var table = document.createElement("table")
    table.setAttribute("class", "table table-striped")
    var tr = document.createElement("tr")
    tr.innerHTML = "<tr><td>ID no</td> <td> First Name</td> <td> Last Name</td> <td>Gender</td> <td> Email</td> <td>English</td> <td>Maths</td> <td> Science</td><td>Total</td></tr>"
    table.append(tr)
    $(".dataHolder").append(table)
    for (i = 0; i < output.length; i++) {
        if (output[i].first_name.includes(stringfn)) {
            console.log(output[i])
            var tr = document.createElement("tr")
            tr.innerHTML = `<tr>
            <td>${output[i].id}</td> 
            <td> ${output[i].first_name}</td>
             <td> ${output[i].last_name}</td> 
             <td> ${output[i].gender}</td>
              <td> ${output[i].email}</td>
               <td> ${output[i].english}</td> 
               <td> ${output[i].maths}</td> 
               <td> ${output[i].science}</td>
               <td>${output[i].total}</td></tr>`
            table.append(tr)
        }
    }
}

// ================================search by lastname====================================================


function  searchlll(output, stringln)
{
    $(".dataHolder").empty()

    var table = document.createElement("table")
    table.setAttribute("class", "table table-striped")
    var tr = document.createElement("tr")
    tr.innerHTML = "<tr><td>ID no</td> <td> First Name</td> <td> Last Name</td> <td>Gender</td> <td> Email</td> <td>English</td> <td>Maths</td> <td> Science</td><td>Total</td></tr>"
    table.append(tr)
    $(".dataHolder").append(table)
    for (i = 0; i < output.length; i++) {
        if (output[i].last_name.includes(stringln)) {
            console.log(output[i])
            var tr = document.createElement("tr")
            tr.innerHTML = `<tr>
            <td>${output[i].id}</td> 
            <td> ${output[i].first_name}</td>
             <td> ${output[i].last_name}</td> 
             <td> ${output[i].gender}</td>
              <td> ${output[i].email}</td>
               <td> ${output[i].english}</td> 
               <td> ${output[i].maths}</td> 
               <td> ${output[i].science}</td>
               <td>${output[i].total}</td></tr>`
            table.append(tr)
        }
    }
}

// =========================search by email==================================================

function searchEmail(output, stringem)
{
    $(".dataHolder").empty()

    var table = document.createElement("table")
    table.setAttribute("class", "table table-striped")
    var tr = document.createElement("tr")
    tr.innerHTML = "<tr><td>ID no</td> <td> First Name</td> <td> Last Name</td> <td>Gender</td> <td> Email</td> <td>English</td> <td>Maths</td> <td> Science</td><td>Total</td></tr>"
    table.append(tr)
    $(".dataHolder").append(table)
    for (i = 0; i < output.length; i++) {
        if (output[i].email.includes(stringem)) {
            console.log(output[i])
            var tr = document.createElement("tr")
            tr.innerHTML = `<tr>
            <td>${output[i].id}</td> 
            <td> ${output[i].first_name}</td>
             <td> ${output[i].last_name}</td> 
             <td> ${output[i].gender}</td>
              <td> ${output[i].email}</td>
               <td> ${output[i].english}</td> 
               <td> ${output[i].maths}</td> 
               <td> ${output[i].science}</td>
               <td>${output[i].total}</td></tr>`
            table.append(tr)
        }
    }
}
function gettttt(output) {
    $(".dataHolder").empty()
    var table = document.createElement("table")
    table.setAttribute("class", "table table-striped table-info")
    var tr = document.createElement("tr")
    tr.innerHTML = "<tr><td>ID no</td> <td> First Name</td> <td> Last Name</td> <td>Gender</td> <td> Email</td> <td>English</td> <td>Maths</td> <td> Science</td><td>Total</td></tr>"
    table.append(tr)
    $(".dataHolder").append(table)
    for (i = 0; i < output.length; i++) {
        var tr = document.createElement("tr")
        tr.innerHTML = `<tr>
        <td>${output[i].id}</td> 
        <td> ${output[i].first_name}</td>
         <td> ${output[i].last_name}</td> 
         <td> ${output[i].gender}</td>
          <td> ${output[i].email}</td>
           <td> ${output[i].english}</td> 
           <td> ${output[i].maths}</td> 
           <td> ${output[i].science}</td>
           <td>${output[i].total}</td></tr>`
        table.append(tr)
        table.append(tr)
    }
}