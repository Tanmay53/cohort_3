var os = document.querySelector("select");

os.addEventListener("click", function() {
    getOSData(printOSData, os);
});
function getOSData(display, os) {
    console.log(os.value);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080/codenames/" + os.value);
    xhr.send();
    xhr.onload = function() {
        if (xhr.status == 200) {
            display(JSON.parse(xhr.response));
        } else console.log("Error status:", xhr.response);
    };
}

var printOSData = function(response) {
    console.log(response.codenames);
    var codenames = response.codenames;
    var body = document.getElementById("body");
    body.innerHTML = "";
    codenames.forEach(function(ele) {
        console.log(ele.version);
        var tr = document.createElement("tr");
        var tdVersion = document.createElement("td");
        var tdName = document.createElement("td");
        tdVersion.textContent = ele.version;
        tdName.textContent = ele.name;
        tr.appendChild(tdVersion);
        tr.appendChild(tdName);
        body.appendChild(tr);
    });
};
