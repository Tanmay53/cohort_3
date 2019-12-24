let userData;
let tempUserData;

window.addEventListener('load', function(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8000/students');

    xhr.onload = function() {
        userData = JSON.parse(xhr.response);
        tempUserData = userData;
        populateTable(perPageData(tempUserData, $("#perPage").val(), 1));
        showPagination(Math.ceil(tempUserData.length / $("#perPage").val()));
    }

    xhr.send();
});

// populate table with user data
function populateTable(userData) {
    var tableDiv = $("#tableDiv");
    tableDiv.html("");

    if(userData.length === 0) {
        tableDiv.html("SORRY!! No Records Available!!");
        return;
    } else {
        var headData = Object.keys(userData[0]);
    }

    // table and heading creation
    var table = document.createElement("table");
    table.setAttribute("class", "table");
    tableDiv.append(table);

    var thead = document.createElement("thead");
    table.appendChild(thead);

    var headRow = document.createElement("tr");
    thead.appendChild(headRow);    
    
    headData.forEach(function(element) {
        var th = document.createElement("th");
        th.textContent = element;
        headRow.appendChild(th);
    });

    var th = document.createElement("th");
    th.textContent = "Total Marks";
    headRow.appendChild(th);

    // inserting data rows
    var tbody = document.createElement("tbody");

    userData.forEach((element) => {
        var tr = document.createElement("tr");

        for(key in element) {
            var td = document.createElement("td");
            td.textContent = element[key];
            tr.appendChild(td);
        }
        var td = document.createElement("td");
        td.textContent = element["english"] + element["maths"] + element["science"];
        tr.appendChild(td);

        tbody.appendChild(tr);
    });

    table.append(tbody);
}

function showPagination(totalPages=1) {
    var ul = $("#footer > nav > ul");
    ul.html("");
    
    for(let i = 1; i <= totalPages; i++) {
        var li = document.createElement("li");
        li.setAttribute("class", "page-item");
        if(i==1) li.classList.add("active");
        ul.append(li);

        var link = document.createElement("a");
        link.setAttribute("class", "page-link");
        link.setAttribute("href", "#");
        link.textContent = i;

        li.appendChild(link);
    }
}

// Display data according to pagination and per page number
function perPageData(data, perPageNum, pageNum) {
    var start = (perPageNum * pageNum) - perPageNum;
    var end = (start > data.length) ? data.length : (perPageNum * pageNum);
    var tempData = [];

    tempData = data.filter((element, index) => (index >= start && index < end));
    
    return tempData;
}

perPage.addEventListener("change", function() {
    populateTable(perPageData(tempUserData, Number(this.value), 1));
    showPagination(Math.ceil(tempUserData.length / this.value));
});

$("#paginationNav").on("click", "a", function() {
    event.preventDefault();
    
    var activeLI = $("#paginationNav").find("li.active");
    activeLI.removeClass("active");
    this.parentNode.classList.add("active");
    
    populateTable(perPageData(tempUserData, $("#perPage").val(), this.textContent));
})

function sortResults(sortBy) {
    switch(sortBy) {
        case 'fnameAsc':
            tempUserData = tempUserData.sort((a,b) => {
                return a.first_name > b.first_name ? 1 : -1;
            });
            break;
        case 'fnameDesc':
            tempUserData = tempUserData.sort((a,b) => {
                return a.first_name < b.first_name ? 1 : -1;
            })
            break;
        case 'lnameAsc':
            tempUserData = tempUserData.sort((a,b) => {
                return a.last_name > b.last_name ? 1 : -1;
            });
            break;
        case 'lnameDesc':
            tempUserData = tempUserData.sort((a,b) => {
                return a.last_name < b.last_name ? 1 : -1;
            });
            break;
        case 'emailAsc':
            tempUserData = tempUserData.sort((a,b) => {
                return a.email > b.email ? 1 : -1;
            });
            break;
        case 'emailDesc':
            tempUserData = tempUserData.sort((a,b) => {
                return a.email < b.email ? 1 : -1;
            });
            break;
    }

    populateTable(perPageData(tempUserData, $("#perPage").val(), 1));
    showPagination(Math.ceil(tempUserData.length / $("#perPage").val()));
}

$("input:radio").on("click", (event) => {
    var filterBy = event.target.value;

    switch(filterBy) {
        case "male":
            tempUserData = userData.filter((user) => {
                return user.gender.toLowerCase() == "male";
            })
            break;
        case "female":
            tempUserData = userData.filter((user) => {
                return user.gender.toLowerCase() == "female";
            })
            break;
        case "all":
            tempUserData = userData;
            break;
    }
    
    populateTable(perPageData(tempUserData, $("#perPage").val(), 1));
    showPagination(Math.ceil(tempUserData.length / $("#perPage").val()));
});