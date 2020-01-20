function shopping_cart() {
    var name = document.getElementById("prod_name").value
    var picture = document.getElementById("prod_img").value
    var price = document.getElementById("prod_price").value

    if (name == "" || picture == "" || price == "") {
        alert("Please fill all the Fields!")
        return
    }

    ////Creating table to add the items ////
    var tab = document.getElementById("output")
    var row1 = document.createElement('tr')
    var col_1 = document.createElement('td')
    col_1.innerHTML = name;
    var col_2 = document.createElement('img')
    col_2.src = picture;
    var col_3 = document.createElement('td')
    col_3.innerHTML = price;
    var col_4 = document.createElement('button')
    col_4.innerHTML = "Delete"
    var col_5 = document.createElement('button')
    col_5.innerHTML = "Edit"
    row1.append(col_1, col_2, col_3, col_4, col_5)
    tab.append(row1)
    var show = document.querySelector(".disp")
    show.style.display = "block";

    ////Resetting the input fields to empty after submitting////
    document.getElementById("prod_name").value = ""
    document.getElementById("prod_img").value = ""
    document.getElementById("prod_price").value = ""

    ////Removing the row after clicking the delete button(achieved by adding eventListener to delete button)(FSD.M2.C.4)////
    col_4.addEventListener('click', remove)
    function remove() {
        row1.remove()
    }

    ////Filling the form with the input values after clicking the edit button and changing the submit button to Update button(FSD.M2.C.5)////
    col_5.addEventListener('click', edit)
    function edit() {
        document.getElementById("prod_name").value = name
        document.getElementById("prod_img").value = picture
        document.getElementById("prod_price").value = price
        document.getElementById("btn").textContent = "UPDATE"
    }

}