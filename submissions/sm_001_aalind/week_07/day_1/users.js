// function to create table rows for each user
function createRows(arr) {
    var tbody = document.getElementsByTagName('tbody')[0];
    tbody.textContent = "";

    for(var i = 0; i < arr.length; i++) {
        var tr = document.createElement("tr");

        for(key in arr[i]) {
            var td = document.createElement("td");
            if(key == "avatar") {
                var img = document.createElement("img");
                img.setAttribute("src", arr[i][key]);
                td.appendChild(img);
            } else {
                td.textContent = arr[i][key];
            }
            tr.appendChild(td)
        }
        tbody.appendChild(tr);
    }
}

// Function to create pagination
function createPagination(totalPages) {
    var container = document.querySelector(".container");
    var nav = document.createElement("nav");
    
    nav.setAttribute("aria-label", "Page navigation example");
    container.appendChild(nav);

    var ul = document.createElement("ul");
    ul.setAttribute("class", "pagination");
    nav.appendChild(ul);

    for(var i = 1; i <= totalPages; i++) {
        var li = document.createElement("li");
        li.setAttribute("class", "page-item");
        
        if(i == 1) {
            li.classList.add("active");
            activePagination = li;
        }
        ul.appendChild(li);

        var link = document.createElement("a");
        link.setAttribute("class", "page-link");
        link.setAttribute("href", "");
        link.textContent = i;
        li.appendChild(link)
    }
}

var activePagination;

window.addEventListener("load", function() {
    var result;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/users")
    xhr.send();

    xhr.addEventListener('load', function() {
        if(xhr.status == 200) {
            result = JSON.parse(xhr.response);

            createRows(result["data"]);
            createPagination(result['total_pages']);

            $(".pagination").on("click", "li", function(event) {
                event.preventDefault();
                activePagination.classList.remove("active");
                activePagination = this;
                activePagination.classList.add("active");
                
                $.ajax({
                    method: "GET",
                    url: "https://reqres.in/api/users?page=" + this.textContent
                }).done(function(data) {
                    createRows(data["data"]);
                });
            });
        } else {
            console.log("ERROR");
        }
    });
});

