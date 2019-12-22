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

    console.log(trs)
    table1.appendChild(trs)

}