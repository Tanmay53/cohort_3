var tbody = document.getElementById("body");
tbody.innerHTML = "";
var visitors = JSON.parse(localStorage.getItem("visitors"));
console.log(visitors);
for (user in visitors) {
    var tr = document.createElement("tr");
    var th = document.createElement("th");
    th.scope = "row";
    var td = document.createElement("td");
    td.textContent = user;
    tr.appendChild(th);
    tr.appendChild(td);
    tbody.appendChild(tr);
    td.addEventListener("click", showTime);
    console.log(user);
}

function showTime() {
    console.log("user clicked");
    var selUser = event.target.innerHTML;
    console.log("user clicked:", user);
    var tr = document.getElementById("showLoginTime");
    tr.innerHTML = "";
    for (user in visitors) {
        if (selUser == user) {
            visitors[user].forEach(function(ele) {
                console.log(ele);
                var h3 = document.querySelector("h3");
                h3.innerHTML = user;
                var td = document.createElement("td");
                td.innerHTML = ele;
                tr.appendChild(td);
            });
        }
    }
}
