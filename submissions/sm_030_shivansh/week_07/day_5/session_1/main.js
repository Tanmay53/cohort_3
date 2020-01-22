
const btn = document.getElementById("search")

btn.addEventListener("click", function () {

    var username = document.getElementById("username").value;

    //calling the userData function
    userData(username);
})


//function  to  fetch  user data

function userData(username) {


    fetch(`https://api.github.com/search/users?q=${username}`)
        .then((result) => {
            // console.log(result);
            return result.json();
        })
        .then((data) => {
            console.log(data);
            //function  to  create table
            createTable(data);
        })
        .catch((error) => {
            console.log(error);
        })

}

//function to createTable
function createTable(data) {

    var header = ["Image", "Username", "Score", "URL", "Details"];
    var table = document.getElementsByClassName("table");
    var thead = document.createElement("thead");

    thead.className += " thead-dark";
    var tr = document.createElement("tr");

    var td = document.createElement("td");

    header.map(ele => {

        td.innerHTML = ele;
        tr.appendChild(td.innerHTML = ele);
    });
    table.appendChild(thead);
    thead.appendChild(tr);
    tr.appendChild(td)

    console.log("table", tableCell);






}