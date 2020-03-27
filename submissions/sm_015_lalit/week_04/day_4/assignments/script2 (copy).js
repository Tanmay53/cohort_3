window.onload = function () {
    $("#btndivUpdate").hide();
    $("#parentRow").hide();
}
var parent = document.getElementById("parentRow")
snum = 1

function insertData(inputName, inputUrl, inputPrice) {
    var tRow = document.createElement("tr")
    tRow.setAttribute("class", "dRow border")
    parent.appendChild(tRow)

    var tCol1 = document.createElement("td")
    tCol1.textContent = snum
    tRow.appendChild(tCol1)

    var tCol2 = document.createElement("td")
    tCol2.textContent = inputName
    tRow.appendChild(tCol2)

    var tCol3 = document.createElement("img")
    tCol3.src = inputUrl
    tCol3.style.height = "60px"
    tCol3.style.width = "70px"
    tCol3.style.marginTop = "2px"
    tRow.appendChild(tCol3)

    var tCol4 = document.createElement("td")
    tCol4.textContent = inputPrice
    tRow.appendChild(tCol4)

    var tCol5 = document.createElement("button")
    tCol5.textContent = "Delete"
    tCol5.setAttribute("class", "btn bg-danger btn-sm")
    tRow.appendChild(tCol5)
    $(tCol5).click(function () {
        $(this).parent().remove()
    })

    var tCol6 = document.createElement("button")
    tCol6.textContent = "Edit"
    tCol6.style.marginLeft = "6px"
    tCol6.setAttribute("class", "btn bg-warning btn-sm")
    tRow.appendChild(tCol6)
    $(tCol6).click(function () {
        $("#btndiv").hide()
        $("#btndivUpdate").show()
        var x = $(this).parent()[0]
        document.getElementById("inputName").value = x.querySelectorAll('td')[1].textContent
        document.getElementById("inputPrice").value = x.querySelectorAll('td')[2].textContent
        document.getElementById("inputUrl").value = x.querySelectorAll('img')[0].src
        $("#btndivUpdate").click(function () {
            x.querySelectorAll('td')[1].textContent = document.getElementById("inputName").value
            x.querySelectorAll('td')[2].textContent = document.getElementById("inputPrice").value
            x.querySelectorAll('img')[0].src = document.getElementById("inputUrl").value

        })

    })
}


document.getElementById("btndiv").addEventListener("click", function () {
    inputName = document.getElementById("inputName").value
    inputUrl = document.getElementById("inputUrl").value
    inputPrice = document.getElementById("inputPrice").value
    insertData(inputName, inputUrl, inputPrice)
    $("#popuText").hide();
    $("#parentRow").show();
    snum++
})