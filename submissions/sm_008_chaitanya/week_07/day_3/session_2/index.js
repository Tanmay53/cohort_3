var data = []
var sliceData

//it get's the data from api and initializes the page
function load() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8000/students');
    xhr.send()
    xhr.onload = function () {
        data = xhr.response
        inputJson = JSON.parse(data)
        intialize(inputJson)
    }
}

function intialize(inputJson) {
    data = inputJson;
    load_data(1);
}

function load_data(index) {

    let perpage = document.getElementById("per_page").value
    let sortValue = document.getElementById("user_sort").value
    let sortType = document.getElementById("user_order").value
    let filterType = document.getElementById("user_filter").value
    //any other

    // functions to filter sort etc //

    findTotal(data);
    perform_sort(data, sortValue)
    order_sort(data, sortType)
    filteredData = perform_filter(data, filterType)
    lower_bound = (index * perpage) - perpage
    upper_bound = Number(lower_bound) + Number(perpage)
    sliceData = filteredData.slice(lower_bound, upper_bound)
    // perform_sort(sliceData,sortValue)(to perform sort in that particular selected page data )
    populate_pages(sliceData)
    create_buttons(perpage);
}

function perform_sort(inputArray, sortOn) {
    if (sortOn == "--") {
        return inputArray
    }

    if (sortOn == "first_name" || sortOn == "last_name" || sortOn == "email") {
        inputArray.sort((first, second) => {
            return first[sortOn].toLowerCase().localeCompare(second[sortOn].toLowerCase())
        })
    }
    else {
        inputArray.sort((a, b) => {
            return a[sortOn] - b[sortOn]
        })
    }
}

function order_sort(inputArray, sortOrder) {
    if (sortOrder == "--") {
        return inputArray
    }
    if (sortOrder == "asc") {
        inputArray.sort((first, second) => {
            return first['first_name'].toLowerCase().localeCompare(second['first_name'].toLowerCase())
        })
    }
    else {
        inputArray.sort((first, second) => {
            return second['first_name'].toLowerCase().localeCompare(first['first_name'].toLowerCase())
        })
    }
}

function perform_filter(inputArray, type) {
    if (type == "all" || type == "--") {
        return inputArray
    }
    else if (type == "male") {
        let filterMale = inputArray.filter(a => a.gender === 'Male')
        return filterMale;
    }
    else if (type == "female") {
        let filterFemale = inputArray.filter(a => a.gender === 'Female')
        return filterFemale
    }

}

document.getElementById('user_sort').addEventListener('change', load)

document.getElementById('per_page').addEventListener('change', load)

document.getElementById('user_order').addEventListener('change', load)

document.getElementById('user_filter').addEventListener('change', load)


function findTotal(marksData) {
    for (var i = 0; i < marksData.length; i++) {
        marksData[i]['total'] = marksData[i].english + marksData[i].maths + marksData[i].science
    }
}

function populate_pages(mod_data) {
    var tablediv = document.getElementById("data_table")
    tablediv.innerHTML = ""
    var tab = document.createElement('table')
    var row = document.createElement('tr')
    var col1 = document.createElement('th')
    col1.innerHTML = "Id"
    var col2 = document.createElement('th')
    col2.innerHTML = "First Name"
    var col3 = document.createElement('th')
    col3.innerHTML = "Last Name"
    var col4 = document.createElement('th')
    col4.innerHTML = "Email"
    var col5 = document.createElement('th')
    col5.innerHTML = "Gender"
    var col6 = document.createElement('th')
    col6.innerHTML = "English"
    var col7 = document.createElement('th')
    col7.innerHTML = "Maths"
    var col8 = document.createElement('th')
    col8.innerHTML = "Science"
    var col9 = document.createElement('th')
    col9.innerHTML = "Total"
    row.append(col1, col2, col3, col4, col5, col6, col7, col8, col9)
    tab.append(row)
    tablediv.append(tab)
    tablediv.setAttribute('class', 'mx-5 px-5 text-center')
    row.setAttribute('class', 'thead-dark')
    tab.setAttribute('class', 'table table-responsive table-striped my-5 mx-5 table-success table-bordered')
    for (var i = 0; i < mod_data.length; i++) {
        var row = document.createElement('tr')
        row.innerHTML = `<tr><td>${mod_data[i].id}</td> <td>${mod_data[i].first_name}</td> <td>${mod_data[i].last_name}</td> <td>${mod_data[i].email}</td> <td>${mod_data[i].gender}</td> <td>${mod_data[i].english}</td> <td>${mod_data[i].maths}</td> <td>${mod_data[i].science}</td> <td>${mod_data[i]['total']}</td></tr>`
        tab.append(row)
    }
}

function nameSearch() {
    text_val = ($('#u_name').val()).toLowerCase()
    new_arr = []
    for (let i = 0; i < sliceData.length; i++) {
        if (sliceData[i]['first_name'].toLowerCase().includes(text_val) == true) {
            new_arr.push(sliceData[i])
        }
    }
    populate_pages(new_arr)
}

function domainSearch() {
    text_val = ($("#u_domain").val()).toLowerCase()
    new_arr = []
    for (let i = 0; i < sliceData.length; i++) {
        var arr = sliceData[i]['email'].split('@')
        if (arr[1].toLowerCase().includes(text_val) == true) {
            new_arr.push(sliceData[i])

        }
    }
    populate_pages(new_arr)
}

function emailSearch() {
    text_val = ($("#u_email").val()).toLowerCase()
    new_arr = []
    for (let i = 0; i < sliceData.length; i++) {
        if (sliceData[i]['email'].toLowerCase().includes(text_val) == true) {
            new_arr.push(sliceData[i])
        }
    }
    populate_pages(new_arr)
}

function create_buttons(perPage) {
    var num_buttons = document.getElementById("page_buttons")
    num_buttons.innerHTML = ""
    let total = inputJson.length
    let pagecount = Math.ceil(total / perPage)
    let loc_btn = document.getElementById("page_buttons")
    for (let i = 1; i <= pagecount; i++) {
        var btn = document.createElement('button')
        btn.innerHTML = i
        loc_btn.append(btn)
        btn.setAttribute('onClick', 'load_data(' + i + ')')
    }

}
