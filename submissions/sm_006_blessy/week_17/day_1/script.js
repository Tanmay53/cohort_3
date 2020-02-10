function sbmit() {
    var search = document.getElementById("searchmovie").value;
    var details = {
        search: search
    }
    details = JSON.stringify(details)
    console.log(details)
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "http://www.omdbapi.com/?i=tt3896198&apikey=b89e2915")
    xhr.send()

    // xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = function () {
        if (xhr.status == 200) {
            console.log(xhr.response)
            var result = JSON.parse(xhr.response)

            // console.log(success)
        }
        else {
            console.log("error code is:xhr.status")
        }
        console.log(result)
        displayData(result)
    }
    function displayData() {
        for (var i = 0; i < result.length; i++) {
            var display = document.querySelector(".box1")
            var col = document.createElement("div")
            col.innerHTML = "MOVIE NAME"
            display.appendChild(col)
        }
    }
}
