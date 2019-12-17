// var category = document.getElementById("CategoryList").value
// var name = document.getElementById("name").value
// var price = document.getElementById("price").value
// var table = document.querySelector(".displayTable")


// function Enter() {
//     var category = document.getElementById("CategoryList").value
//     var name = document.getElementById("name").value
//     var price = document.getElementById("price").value
//     console.log(name, category, price)

//     var table1 = document.querySelector("table");
//     var trs = document.createElement("tr");
//     trs.innerHTML = "<td>" + category + "</td><td>" + name + "</td><td>" + price + "</td>"
//     table1.appendChild(trs)
//     console.log(trs)
// }




function Enter() {
    var table1 = document.querySelector("table");
    var Category = document.getElementById('CategoryList').value;
    var Name = document.getElementById('name').value;
    var Price = document.getElementById('price').value;
    var JobTitle = document.getElementById('jobtitle').value;

    console.log(Category, Name, Price, JobTitle)
    var trs = document.createElement('tr');
    var td1 = document.createElement("td")
    td1.textContent = Category
    trs.appendChild(td1)

    var td2 = document.createElement("td")
    td2.textContent = Name
    trs.appendChild(td2)

    var td3 = document.createElement("td")
    td3.textContent = Price
    trs.appendChild(td3)

    var td4 = document.createElement("td")
    td4.textContent = JobTitle
    trs.appendChild(td4)



    // trs.innerHTML = "<td>" + Category + "</td><td>" + Name + "</td><td>" + Price + "</td>"
    // trs.innerHTML = "SVJFV"
    console.log(trs)
    table1.appendChild(trs)

}