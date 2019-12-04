window.onload = loadPage;
var verbose = true;
var clearConsole = true;

if (clearConsole) {
  console.clear();
}

function loadPage() {
  $.ajax({
    url: "https://reqres.in/api/users/"
  }).done(function(data) {
    responseObj = data;

    totalPages = responseObj["total_pages"];

    for (var i = 0; i < totalPages; i++) {
      var listItem = document.createElement("li");
      $(listItem).addClass("page-item");
      $(".pagination").append(listItem);

      var anchor = document.createElement("a");
      $(anchor).addClass("page-link");
      $(anchor).attr("href", "#");
      $(anchor).click(function(e) {
        e.preventDefault();
        fetchPage(this.textContent);
      });
      $(anchor).text(i + 1);

      $(listItem).append(anchor);
    }

    var tableDiv = document.createElement("div");
    tableDiv.setAttribute("id", "tableDiv");
    $(".container").append(tableDiv);

    var table = document.createElement("table");
    $("#tableDiv").append(table);

    var row = document.createElement("tr");
    row.setAttribute("class", "bg-info text-light");
    $("table").append(row);

    var id = document.createElement("th");
    var firstName = document.createElement("th");
    var lastName = document.createElement("th");
    var email = document.createElement("th");
    var avatar = document.createElement("th");

    id.textContent = "ID";
    firstName.textContent = "First Name";
    lastName.textContent = "Last Name";
    email.textContent = "Email";
    avatar.textContent = "Avatar";

    row.appendChild(id);
    row.appendChild(firstName);
    row.appendChild(lastName);
    row.appendChild(email);
    row.appendChild(avatar);

    $("table").addClass(
      "table table-bordered shadow shadow-lg text-center mt-5"
    );

    if (verbose) {
      console.log("Response from API", responseObj);
    }

    for (key1 in responseObj) {
      if (key1 == "data") {
        if (verbose) {
          console.log("All user data");
          console.table(responseObj[key1]);
        }

        pageData = responseObj[key1];
        for (key2 in pageData) {
          if (verbose) {
            console.log("Individual user data");
            console.table(pageData[key2]);
          }

          userData = pageData[key2];

          var row = document.createElement("tr");
          $("table").append(row);

          var id = document.createElement("td");
          var firstName = document.createElement("td");
          var lastName = document.createElement("td");
          var email = document.createElement("td");

          var imageContainer = document.createElement("td");
          var avatar = document.createElement("img");
          avatar.setAttribute("src", userData["avatar"]);
          avatar.setAttribute("class", "m-2 rounded-circle");
          imageContainer.appendChild(avatar);

          id.textContent = userData["id"];
          firstName.textContent = userData["first_name"];
          lastName.textContent = userData["last_name"];
          email.textContent = userData["email"];

          row.appendChild(id);
          row.appendChild(firstName);
          row.appendChild(lastName);
          row.appendChild(email);
          row.appendChild(imageContainer);

          $("td").addClass("align-middle");
        }
      }
    }
  });
}

function fetchPage(page) {
  $.ajax({
    url: "https://reqres.in/api/users?page=" + page
  }).done(function(data) {
    responseObj = data;

    $("#tableDiv").remove();

    var tableDiv = document.createElement("div");
    tableDiv.setAttribute("id", "tableDiv");
    $(".container").append(tableDiv);

    var table = document.createElement("table");
    $("#tableDiv").append(table);

    var row = document.createElement("tr");
    row.setAttribute("class", "bg-info text-light");
    $("table").append(row);

    var id = document.createElement("th");
    var firstName = document.createElement("th");
    var lastName = document.createElement("th");
    var email = document.createElement("th");
    var avatar = document.createElement("th");

    id.textContent = "ID";
    firstName.textContent = "First Name";
    lastName.textContent = "Last Name";
    email.textContent = "Email";
    avatar.textContent = "Avatar";

    row.appendChild(id);
    row.appendChild(firstName);
    row.appendChild(lastName);
    row.appendChild(email);
    row.appendChild(avatar);

    $("table").addClass(
      "table table-bordered shadow shadow-lg text-center mt-5"
    );

    if (verbose) {
      console.log("Response from API", responseObj);
    }

    for (key1 in responseObj) {
      if (key1 == "data") {
        if (verbose) {
          console.log("All user data");
          console.table(responseObj[key1]);
        }

        pageData = responseObj[key1];
        for (key2 in pageData) {
          if (verbose) {
            console.log("Individual user data");
            console.table(pageData[key2]);
          }

          userData = pageData[key2];

          var row = document.createElement("tr");
          $("table").append(row);

          var id = document.createElement("td");
          var firstName = document.createElement("td");
          var lastName = document.createElement("td");
          var email = document.createElement("td");

          var imageContainer = document.createElement("td");
          var avatar = document.createElement("img");
          avatar.setAttribute("src", userData["avatar"]);
          avatar.setAttribute("class", "m-2 rounded-circle");
          imageContainer.appendChild(avatar);

          id.textContent = userData["id"];
          firstName.textContent = userData["first_name"];
          lastName.textContent = userData["last_name"];
          email.textContent = userData["email"];

          row.appendChild(id);
          row.appendChild(firstName);
          row.appendChild(lastName);
          row.appendChild(email);
          row.appendChild(imageContainer);

          $("td").addClass("align-middle");
        }
      }
    }
  });
}
