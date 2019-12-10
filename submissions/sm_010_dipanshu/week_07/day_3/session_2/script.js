var data;
var allStudents;
var setOfStudents;

window.addEventListener("load", function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:8000/students");
  xhr.onload = function() {
    data = xhr.response;
    calculateTotal(data);
    displayData(10);
  };
  xhr.send();
});

function calculateTotal(response) {
  allStudents = JSON.parse(response);
  //   console.table(allStudents);

  allStudents.forEach(function(eachStudent) {
    eachStudent.total_marks =
      eachStudent.english + eachStudent.maths + eachStudent.science;
    // console.log(eachStudent);
  });

  setOfStudents = allStudents;
}

function sortBy(type, value) {
  // console.clear();
  // console.log("Sort by =>", type, "=>", value);
  if (
    type == "first_name" ||
    type == "last_name" ||
    type == "email" ||
    type == "total_marks" ||
    type == "english" ||
    type == "maths" ||
    type == "science"
  ) {
    if (type == "first_name") {
      $("#lastNameSort").val("");
      $("#emailSort").val("");
      $("#marksSort").val("");
      $("#genderSort").val("all");
    } else if (type == "total_marks") {
      $("#nameSort").val("");
      $("#lastNameSort").val("");
      $("#emailSort").val("");
      $("#genderSort").val("all");
    } else if (type == "last_name") {
      $("#nameSort").val("");
      $("#emailSort").val("");
      $("#marksSort").val("");
      $("#genderSort").val("all");
    } else if (type == "email") {
      $("#nameSort").val("");
      $("#lastNameSort").val("");
      $("#marksSort").val("");
      $("#genderSort").val("all");
    } else if (type == "english") {
      $("#nameSort").val("");
      $("#lastNameSort").val("");
      $("#emailSort").val("");
      $("#marksSort").val("");
      $("#genderSort").val("all");
      $("#mathsMarks").val("");
      $("#scienceMarks").val("");
    } else if (type == "maths") {
      $("#nameSort").val("");
      $("#lastNameSort").val("");
      $("#emailSort").val("");
      $("#marksSort").val("");
      $("#genderSort").val("all");
      $("#englishMarks").val("");
      $("#scienceMarks").val("");
    } else if (type == "science") {
      $("#nameSort").val("");
      $("#lastNameSort").val("");
      $("#emailSort").val("");
      $("#marksSort").val("");
      $("#genderSort").val("all");
      $("#englishMarks").val("");
      $("#mathsMarks").val("");
    }

    if (value == "asc") {
      setOfStudents.sort(function(a, b) {
        if (a[type] > b[type]) {
          return 1;
        } else if (a[type] < b[type]) {
          return -1;
        }
        return 0;
      });
    } else if (value == "desc") {
      setOfStudents.sort(function(a, b) {
        if (a[type] < b[type]) {
          return 1;
        } else if (a[type] > b[type]) {
          return -1;
        }
        return 0;
      });
    }
    // console.table(setOfStudents);
    // displaySortedData(setOfStudents);
  } else if (type == "gender") {
    $("#nameSort").val("");
    $("#marksSort").val("");

    if (value == "all") {
      // console.table(setOfStudents);
      displaySortedData(setOfStudents);
    } else {
      let selectedGenderStudents = setOfStudents.filter(function(student) {
        return student[type] == value;
      });
      // console.table(selectedGenderStudents);
      displaySortedData(selectedGenderStudents);
    }
  }
}

function displayData(results) {
  // console.clear();
  // console.log("No of pages asked =>", results);

  $(".pagination").empty();
  $("#nameSort").val("");
  $("#lastNameSort").val("");
  $("#emailSort").val("");
  $("#marksSort").val("");
  $("#englishMarks").val("");
  $("#mathsMarks").val("");
  $("#scienceMarks").val("");
  $("#genderSort").val("all");

  for (let i = 0; i < Math.floor(allStudents.length / results); i++) {
    var listItem = document.createElement("li");
    $(listItem).addClass("page-item");
    $(".pagination").append(listItem);

    var anchor = document.createElement("a");
    $(anchor).addClass("page-link bg-dark text-light");
    $(anchor).attr("href", "#");
    $(anchor).click(function(e) {
      e.preventDefault();
      fetchPage(this.textContent, results);
    });
    $(anchor).text(i + 1);

    $(listItem).append(anchor);
  }

  fetchPage(1, results);
}

function fetchPage(page, results) {
  page = Number(page);
  results = Number(results);

  // console.clear();
  // console.log("Page to be fetched", page);
  // console.log("Results to be fetched for a single page", results);
  // console.log(
  //   "Index to be fetched",
  //   page * results - results,
  //   "through",
  //   page * results
  // );

  index = page * results - results;
  setOfStudents = [];
  for (let i = index; i < index + results; i++) {
    setOfStudents.push(allStudents[i]);
  }
  // console.table(setOfStudents);

  function fillInfo(selectedStudents) {
    let html = `<tr class="bg-dark text-light">
                    <th>ID</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>English Marks</th>
                    <th>Maths Marks</th>
                    <th>Science Marks</th>
                    <th>Total Marks</th>
                </tr>`;
    selectedStudents.forEach(function(student) {
      html += `<tr>
                    <td class="font-weight-bold">${student.id}</td>
                    <td>${student.first_name}</td>
                    <td>${student.last_name}</td>
                    <td>${student.email}</td>
                    <td>${student.gender}</td>
                    <td>${student.english}</td>
                    <td>${student.maths}</td>
                    <td>${student.science}</td>
                    <td>${student.total_marks}</td>
                </tr>`;
    });
    return html;
  }
  let table = document.getElementById("table");
  table.innerHTML = fillInfo(setOfStudents);
}

function displaySortedData(setOfStudents) {
  function fillInfo(selectedStudents) {
    let html = `<tr class="bg-dark text-light">
                        <th>ID</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>English Marks</th>
                        <th>Maths Marks</th>
                        <th>Science Marks</th>
                        <th>Total Marks</th>
                    </tr>`;
    selectedStudents.forEach(function(student) {
      html += `<tr>
                        <td class="font-weight-bold">${student.id}</td>
                        <td>${student.first_name}</td>
                        <td>${student.last_name}</td>
                        <td>${student.email}</td>
                        <td>${student.gender}</td>
                        <td>${student.english}</td>
                        <td>${student.maths}</td>
                        <td>${student.science}</td>
                        <td>${student.total_marks}</td>
                    </tr>`;
    });
    return html;
  }
  let table = document.getElementById("table");
  table.innerHTML = fillInfo(setOfStudents);
}

function searchUser(value) {
  // console.log("Search for", value);

  let searchResults = allStudents.filter(function(student) {
    if (value == "firstname") {
      let user = $("#searchFname")
        .val()
        .toLowerCase();
      return student.first_name.toLowerCase().indexOf(user) != -1;
    } else if (value == "lastname") {
      let user = $("#searchLname")
        .val()
        .toLowerCase();
      return student.last_name.toLowerCase().indexOf(user) != -1;
    } else if (value == "domain") {
      let domain = $("#searchDomain")
        .val()
        .toLowerCase()
        .split("@");
      return student.email.toLowerCase().indexOf(domain[1]) != -1;
    } else if (value == "email") {
      let email = $("#searchEmail")
        .val()
        .toLowerCase();
      return student.email.toLowerCase().indexOf(email) != -1;
    }
  });

  $("#searchFname").val("");
  $("#searchLname").val("");
  $("#searchDomain").val("");
  $("#searchEmail").val("");

  // console.table(searchResults);

  displaySortedData(searchResults);
}
