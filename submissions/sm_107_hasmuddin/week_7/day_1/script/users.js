$(document).ready(function() {
  pageStart(1);
});
function pageStart(page) {
  var body = document.querySelector("body");
  $(body).empty();
  url = "https://reqres.in/api/users?page=" + page;
  method = "GET";
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.onload = function() {
    if (xhr.status == 200) {
      var resData = JSON.parse(xhr.response).data;
      tableData();
      callback(resData);
    }
  };
  xhr.send();
}

function callback(resData) {
  for (var i = 0; i < resData.length; i++) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var img = document.createElement("img");
    img.setAttribute("src", resData[i].avatar);
    img.setAttribute("style", "border-radius:50%");
    $(td1).text(resData[i].first_name);
    $(td2).text(resData[i].last_name);
    $(td3).text(resData[i].email);
    $(td4).append(img);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    $("#table").append(tr);
  }
  var body = document.querySelector("body");
  var btn1 = document.createElement("button");
  btn1.setAttribute("class", "btn btn-info m-5 px-5");
  btn1.textContent = "1";
  btn1.setAttribute("id", "button1");
  btn1.setAttribute("onclick", "pageStart(1)");
  var btn2 = document.createElement("button");
  btn2.setAttribute("id", "button2");
  btn2.setAttribute("class", "btn btn-info m-5 px-5");
  btn2.setAttribute("onclick", "pageStart(2)");
  btn2.textContent = "2";
  $(body).append(btn1);
  $(body).append(btn2);
}
function tableData() {
  var body = document.querySelector("body");

  var cont = document.createElement("div");
  cont.setAttribute("class", "container");

  var row = document.createElement("div");
  row.setAttribute("class", "row");

  var table = document.createElement("table");
  table.setAttribute("class", "table my-3 border");
  table.setAttribute("id", "table");

  var tableRow = document.createElement("tr");
  tableRow.setAttribute("class", "p-3 border mx-4");

  var fName = document.createElement("td");
  fName.setAttribute("class", "p-3 border mx-4");
  fName.textContent = "First Name";

  var lName = document.createElement("td");
  lName.setAttribute("class", "p-3 border mx-4");
  lName.textContent = "Last Name";

  var emailCol = document.createElement("td");
  emailCol.setAttribute("class", "p-3 border mx-4");
  emailCol.textContent = "Email";

  var av = document.createElement("td");
  av.setAttribute("class", "p-3 border mx-4");
  av.textContent = "Avatar";

  $(body).append(cont);
  $(cont).append(row);
  $(row).append(table);
  $(table).append(tableRow);
  $(tableRow).append(fName);
  $(tableRow).append(lName);
  $(tableRow).append(emailCol);
  $(tableRow).append(av);
}
