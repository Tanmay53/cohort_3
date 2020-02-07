var data
$('#orderTable').hide()
window.addEventListener('load', function () {
    console.log('loading')
    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://localhost:8000/students')
    xhr.onload = function () {
        data = JSON.parse(xhr.response)
        console.log(data)
    }
    xhr.send()
})

document.getElementById("usersperPage").addEventListener('change', showNoofPageButtons)

function showNoofPageButtons() {
    var div = document.getElementById('pageNoButton')
    div.innerHTML = ""
    var usersperPage = document.getElementById('usersperPage').value
    var buttonofPages = Math.ceil(data.length / usersperPage)
    console.log(buttonofPages)

    for (var i = 1; i <= buttonofPages; i++) {
        var button = document.createElement('button')
        div.appendChild(button)
        button.setAttribute("value", i)
        button.addEventListener('click', displaypages)
        button.innerHTML = i
    }
}


function displaypages(ele) {
    // console.log(ele)
    var perpage = document.getElementById('usersperPage').value
    console.log(perpage)

    var pageNum = ele.target.value
    // console.log(pageNum)
    var start = pageNum * perpage - perpage
    var limit = Number(start) + Number(perpage)
    var tablediv = document.getElementById("tablediv")
    var table = document.createElement("table")
    tablediv.innerHTML = ""
    tablediv.appendChild(table)
    table.setAttribute("class", "table table-bordered table-light")
    var thead = document.createElement("thead")
    thead.setAttribute("class", "thead-dark")
    table.appendChild(thead)
    var rowH = document.createElement("tr")
    thead.appendChild(rowH)

    var col1 = document.createElement("th")
    col1.textContent = "id"
    rowH.appendChild(col1)
    var col2 = document.createElement("th")
    col2.textContent = "first_name"
    rowH.appendChild(col2)
    var col3 = document.createElement("th")
    col3.textContent = "last_name"
    rowH.appendChild(col3)
    var col4 = document.createElement("th")
    col4.textContent = "email"
    rowH.appendChild(col4)
    var col5 = document.createElement("th")
    col5.textContent = "gender"
    rowH.appendChild(col5)
    var col6 = document.createElement("th")
    col6.textContent = "english"
    rowH.appendChild(col6)
    var col7 = document.createElement("th")
    col7.textContent = "maths"
    rowH.appendChild(col7)
    var col8 = document.createElement("th")
    col8.textContent = "science"
    rowH.appendChild(col8)
    var col9 = document.createElement("th")
    col9.textContent = "totalscore"
    rowH.appendChild(col9)
    var col10= document.createElement("th")
    col10.textContent="delete"
    rowH.appendChild(col10)

    for (var i = start; i < limit; i++) {
        var row = document.createElement('tr');
        table.append(row)

        var col1 = document.createElement('td');
        col1.innerHTML = data[i]["id"];
        row.appendChild(col1)

        var col2 = document.createElement('td');
        col2.innerHTML = data[i]["first_name"];
        row.appendChild(col2)

        var col3 = document.createElement('td');
        col3.innerHTML = data[i]["last_name"];
        row.appendChild(col3)

        var col4 = document.createElement('td');
        col4.innerHTML = data[i]["email"];
        row.appendChild(col4)

        var col5 = document.createElement('td');
        col5.innerHTML = data[i]["gender"];
        row.appendChild(col5)

        var col6 = document.createElement('td');
        col6.innerHTML = data[i]["english"];
        row.appendChild(col6)

        var col7 = document.createElement('td');
        col7.innerHTML = data[i]["maths"];
        row.appendChild(col7)

        var col8 = document.createElement('td');
        col8.innerHTML = data[i]["science"];
        row.appendChild(col8)

        var col9 = document.createElement('td');
        col9.innerHTML = parseInt(data[i]["english"]) + parseInt(data[i]["maths"]) + parseInt(data[i]["science"]);
        row.appendChild(col9)    

        var col10 = document.createElement('td');
        var delbtn = document.createElement('button');
        delbtn.innerHTML = "Delete"
        delbtn.setAttribute('class', "btn btn-danger")
        col10.append(delbtn);
        row.appendChild(col10)

        col10.addEventListener('click', deleteUserData)
    }
}

function deleteUserData() {
    var parent = this.parentElement;
    // console.log(parent)
    parent.remove();
}

$("#typeofUser").click(function () {
    var typeofUser = $("#typeofUser").val()
    console.log(typeofUser)
    var reqUsers = [];
    if (typeofUser == "Male") {
        for (var i = 0; i < data.length; i++) {
            if (data[i]["gender"] == typeofUser) {
                reqUsers.push(data[i]);
            }
        }
    }

    if (typeofUser == "Female") {
        for (var j = 0; j < data.length; j++) {
            if (data[j]["gender"] == typeofUser) {
                reqUsers.push(data[j]);
            }
        }
    }
    console.log(reqUsers)
    displayUserDetailsInTable(reqUsers)
})

function displayUserDetailsInTable(arr) {
    $('#orderTable').show()
    $('#tablediv').hide()
    $('#display').empty()
    for (var i = 0; i < arr.length; i++) {
        var row = document.createElement('tr');
        $('#display').append(row)

        
        var col1 = document.createElement('td');
        col1.innerHTML = arr[i]["id"];
        row.appendChild(col1)

        var col2 = document.createElement('td');
        col2.innerHTML = arr[i]["first_name"];
        row.appendChild(col2)

        var col3 = document.createElement('td');
        col3.innerHTML = arr[i]["last_name"];
        row.appendChild(col3)

        var col4 = document.createElement('td');
        col4.innerHTML = arr[i]["email"];
        row.appendChild(col4)

        var col5 = document.createElement('td');
        col5.innerHTML = arr[i]["gender"];
        row.appendChild(col5)
       
    
        var col6 = document.createElement('td');
        col6.innerHTML = arr[i]["english"];
        row.appendChild(col6)

        var col7 = document.createElement('td');
        
        col7.innerHTML = arr[i]["maths"];
        row.appendChild(col7)

        var col8 = document.createElement('td');
        col8.innerHTML = arr[i]["science"];
        row.appendChild(col8)

        var col9 = document.createElement('td');
        col9.innerHTML = parseInt(arr[i]["english"]) + parseInt(arr[i]["maths"]) + parseInt(arr[i]["science"]);
        row.appendChild(col9)    

        var col10 = document.createElement('td');
        var delbtn = document.createElement('button');
        delbtn.innerHTML = "Delete"
        delbtn.setAttribute('class', "btn btn-danger")
        col10.append(delbtn);
        row.appendChild(col10)

        col10.addEventListener('click', deleteUserData)
    }
}

$("#marksOrderEng").click(function () {
    var marksOrderEng = $("#marksOrderEng").val()
    console.log(marksOrderEng)

    if (marksOrderEng == "LtoH") {
        data.sort(function (a, b) {
            if (a.english > b.english) {
                return 1
            }
            if (a.english < b.english) {
                return -1
            }
            return 0;
        });
    }
    if (marksOrderEng == "HtoL") {
        data.sort(function (a, b) {
            if (a.english > b.english) {
                return -1
            }
            if (a.english < b.english) {
                return 1
            }
            return 0;
        });
    }
    displayUserDetailsInTable(data)

})

$("#marksOrdermath").click(function () {
    var marksOrdermath = $("#marksOrdermath").val()
    console.log(marksOrdermath)

    if (marksOrdermath == "LtoH") {
        data.sort(function (a, b) {
            if (a.maths > b.maths) {
                return 1
            }
            if (a.maths < b.maths) {
                return -1
            }
            return 0;
        });
    }
    if (marksOrdermath == "HtoL") {
        data.sort(function (a, b) {
            if (a.maths > b.maths) {
                return -1
            }
            if (a.maths < b.maths) {
                return 1
            }
            return 0;
        });
    }
    displayUserDetailsInTable(data)

})
marksOrdersci
$("#marksOrdersci").click(function () {
    var marksOrdersci = $("#marksOrdersci").val()
    console.log(marksOrdersci)

    if (marksOrdersci == "LtoH") {
        data.sort(function (a, b) {
            if (a.science > b.science) {
                return 1
            }
            if (a.science < b.science) {
                return -1
            }
            return 0;
        });
    }
    if (marksOrdersci == "HtoL") {
        data.sort(function (a, b) {
            if (a.science > b.science) {
                return -1
            }
            if (a.science < b.science) {
                return 1
            }
            return 0;
        });
    }
    displayUserDetailsInTable(data)

})

$("#sortingUser").click(function () {
    var sortingUser = $("#sortingUser").val();
    console.log(sortingUser);

    if (sortingUser == "acc") {
        data.sort(function (a, b) {
            if (a.first_name > b.first_name) {
                return 1
            }
            if (a.first_name < b.first_name) {
                return -1
            }
            return 0;
        });
    }
    if (sortingUser == "des") {
        data.sort(function (a, b) {
            if (a.first_name > b.first_name) {
                return -1
            }
            if (a.first_name < b.first_name) {
                return 1
            }
            return 0;
        });
    }
    displayUserDetailsInTable(data)
})

$("#typingName").keyup(function(){
    var firstname = $("#typingName").val();
    var reqStudents = []
    for(var i = 0; i < data.length; i++){
        if(data[i]["first_name"] == firstname){
            reqStudents.push(data[i])
        }
    }
    console.log(reqStudents)
    displayUserDetailsInTable(reqStudents)
})

$("#typingEmail").keyup(function(){
    var firstname = $("#typingEmail").val();
    var reqStudents = []
    for(var i = 0; i < data.length; i++){
        if(data[i]["email"] == firstname){
            reqStudents.push(data[i])
        }
    }
    console.log(reqStudents)
    displayUserDetailsInTable(reqStudents)
})