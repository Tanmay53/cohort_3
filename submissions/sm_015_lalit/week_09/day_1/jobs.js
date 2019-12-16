
function createRow(idx, titlex, urlx, companyx, locationx, summaryx) {

    var row = document.createElement("tr")
    tableX.appendChild(row)
    var col_id = document.createElement("td")
    col_id.textContent = idx
    row.appendChild(col_id)
    var col_title = document.createElement("td")
    col_title.textContent = titlex
    row.appendChild(col_title)
    var col_url = document.createElement("a")
    col_url.href = urlx
    col_url.setAttribute("class", "mt-2")
    col_url.textContent = "Click here"
    row.appendChild(col_url)
    var col_company = document.createElement("td")
    col_company.textContent = companyx
    row.appendChild(col_company)
    var col_location = document.createElement("td")
    col_location.textContent = locationx
    row.appendChild(col_location)
    var col_summary = document.createElement("td")
    col_summary.textContent = summaryx
    row.appendChild(col_summary)

}
$("#tableX").hide()
$("#pagiN").hide()
$("#loading").hide()

function getData() {
    $("#loading").show()
    searchInput = document.getElementById("sQuery").value
    searchInput = searchInput.split(" ").join("%20")
    var request = $.ajax({
        url: "https://indreed.herokuapp.com/api/jobs/?q=" + searchInput
    })

    request.done(function (data) {
        console.log(data)
        var dataIn = (data)
        $("#loading").hide()
        console.log(dataIn.length)
        $("#tableX > tr").remove()
        $("#tableX").show()
        $("#pagiN").show()
        for (i = 0; i < dataIn.length; i++) {
            var id = dataIn[i]["id"]
            var title = dataIn[i]["title"]
            var location = dataIn[i]["location"]
            var summary = dataIn[i]["summary"]
            var company = dataIn[i]["company"]
            var url = dataIn[i]["url"]
            createRow(id, title, url, company, location, summary)
        }

    })
    request.fail(function () {
        $("#loading").hide()
        console.log(request.status)
    })

}

goSearch.addEventListener("click", getData)