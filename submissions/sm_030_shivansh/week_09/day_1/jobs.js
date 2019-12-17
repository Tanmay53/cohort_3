console.log("Hello World");

$("#submit").on("click", function () {

    console.log("submit done")
    var job_title = $("#query").val();
    var res = job_title.split(" ");
    var title = res[0];


    for (var i = 1; i < res.length; i++) {
        title += "%20" + res[i];
    }



    getDetails(title);

});


function getDetails(title) {
    console.log("getDetails");


    $.ajax({
        url: "https://indreed.herokuapp.com/api/jobs?q=" + title + "",
        type: "GET",
        dataType: "jsonp",
        success: function (response) {
            console.log(response);
        }
    });




}

// function callApi
function callApi(title) {
    var xhr = new XMLHttpRequest();

    // This configures the object to perform a GET request to the given url
    // Notice how we pass page=2
    var url = "https://indreed.herokuapp.com/api/jobs?q=" + title + ""
    xhr.open('GET', url);


    // This will send the GET request to the server.
    xhr.send();

    // This function will be called after the information is retrieved
    xhr.onload = function () {

        // The HTTP 200 code is returned when your request is successful so we check for that
        if (xhr.status == 200) {
            // Print the response from the server after a successful request


            var obj = JSON.parse(xhr.response);
            console.log(obj);
            var arr = obj.data;
            console.log(arr);



        }
        else {
            console.log("Error Code is:" + xhr.status)
        }
    }
}
//function  to  insert data into  table
function createTable(arr) {
    for (var i = 0; i < arr.length; i++) {
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerHTML = arr[i]["title"]

        var td2 = document.createElement("td");
        td2.innerHTML = arr[i]["url"]

        var td3 = document.createElement("td");
        td3.innerHTML = arr[i]["company"];

        var td4 = document.createElement("td");
        td4.innerHTML = arr[i]["location"];

        var td5 = document.createElement("td");
        td5.innerHTML = arr[i]["summary"];


        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        var tbody = document.querySelector("tbody");

        tbody.appendChild(tr);


    }
}