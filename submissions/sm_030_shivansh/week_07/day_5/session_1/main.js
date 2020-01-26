
const btn = document.getElementById("search")

btn.addEventListener("click", function () {

    var username = document.getElementById("username").value;

    //calling the userData function
    userData(username);
})


//function  to  fetch  user data

function userData(username) {

    //clearing the username from input and last search data
    document.getElementById("username").value = "";
    //calling remove function  to  remove 
    remove();


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

    // creating the table header 
    var header = ["Image", "Username", "Score", "URL"];

    var thead = document.getElementById("thead");

    var tr = document.createElement("tr");

    for (let i = 0; i < header.length; i++) {

        var th = document.createElement("th");
        th.innerHTML = `${header[i]}`;
        tr.appendChild(th)

    }
    thead.appendChild(tr);


    //creating the table body
    var arr = data.items;
    console.log(arr);
    var userDetail = {
        "avatar_url": "avatar_url",
        "login": "login",
        "score": "score",
        "html_url": "html_url"
    }
    var tbody = document.getElementById("tbody")

    console.log(arr[0]);
    console.log(arr[0].avatar_url);



    for (let i = 0; i < arr.length; i++) {


        let td1 = document.createElement("td");
        let src = arr[i].avatar_url;
        td1.innerHTML = `<img src=${src} width="100px" height="100px"/>`;

        let td2 = document.createElement("td");
        td2.innerHTML = arr[i].login;

        let td3 = document.createElement("td");
        td3.innerHTML = arr[i].score;

        let td4 = document.createElement("td");
        let link = arr[i].avatar_url;
        td4.innerHTML = `<a href=${arr[i].html_url} class="btn btn-lg  btn-info" target="blank">Profile Link</a>`;

        let tr = document.createElement("tr");

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);


        // for (key in userDetail) {
        //     // console.log(keys);

        //     console.log(arr[i].key);
        //     var td = document.createElement("td");
        //     td.innerHTML = arr[i].key;
        //     tr.appendChild(td);
        // }

        tbody.appendChild(tr);
    }

}

//function  to  rempve the last user data
function remove() {

    // $("th").remove();
    $("tr").remove();
}