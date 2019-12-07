// student array
var studentsArr = [];
var emailCount = 0;
var marksCount = 0;
// on load event listener
document.addEventListener("DOMContentLoaded", function() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "students.json", true);
  xhr.onload = () => {
    if (xhr.status == 200) {
      loadData(JSON.parse(xhr.response));
    } else {
      console.log(xhr.responseText);
    }
  };
  xhr.send();
});

function loadData(students) {
  students.forEach((element, index) => {
    for (key in element) {
      let marks = totalMarks(element.english, element.maths, element.science);
      element.total = marks;
    }
  });
  studentsArr = students;
  loadTable(studentsArr);
}

// adding event listener to button
document.getElementById("tableLength").addEventListener("change", () => {
  loadTable(studentsArr);
});
document.getElementById("gender").addEventListener("change", e => {
  let val = e.target.value;
  filter(val);
});
document.getElementById("sortEmail").addEventListener("click", () => {
  emailCount++;
  sort("email");
});
document.getElementById("sortMarks").addEventListener("click", () => {
  marksCount++;
  sort("marks");
});
document.getElementById("searchText").addEventListener("keyup", e => {
  let val = e.target.value;
  search(val);
});

// function load table on page-change or page-reload
function loadTable(students) {
  var page = 1;
  var length = document.getElementById("tableLength").value;
  table(students, page, length);
  createPagination(students, length);
}

// function to create table
function table(students, page, length) {
  var startPoint = page * length - length;
  var endPoint = page * length;

  let tableBody = document.getElementById("userTable");
  tableBody.innerHTML = "";

  for (var i = startPoint; i < endPoint; i++) {
    var row = addRow(students[i]);
    tableBody.appendChild(row);
  }
}

// function to add info row in the table
function addRow(student) {
  var row = document.createElement("tr");
  row.innerHTML =
    "<td>" +
    student.id +
    "</td>" +
    "<td>" +
    student.first_name +
    "</td>" +
    "<td>" +
    student.last_name +
    "</td>" +
    "<td>" +
    student.email +
    "</td>" +
    "<td>" +
    student.gender +
    "</td>" +
    "<td>" +
    student.english +
    "</td>" +
    "<td>" +
    student.maths +
    "</td>" +
    "<td>" +
    student.science +
    "</td>" +
    "<td>" +
    student.total +
    "</td>";
  return row;
}

// function create and add pagination in table
function createPagination(students, length) {
  // calculate to pagination button to make
  var pages = Number(students.length) / Number(length);
  pages = Math.ceil(pages);
  // pagination div
  let pageNav = document.getElementById("pagination");
  pageNav.innerHTML = "";

  // pagination
  var ul = document.createElement("ul");
  ul.setAttribute("class", "pagination justify-content-center");
  for (var i = 1; i <= pages; i++) {
    var li = document.createElement("li");
    li.setAttribute("class", "page-item");
    var button = document.createElement("button");
    button.setAttribute("class", "page-link");
    button.setAttribute("value", i);
    button.innerHTML = i;
    button.addEventListener("click", () => {
      newPage(students);
    });
    li.appendChild(button);
    ul.appendChild(li);
  }
  pageNav.appendChild(ul);
}

// get page number
function newPage(students) {
  let page = event.target.value;
  let length = document.getElementById("tableLength").value;
  table(students, page, length);
  createPagination(students, length);
}

// function to sort the user table
function sort(input) {
  var sortedArr = [];
  switch (input) {
    case "email": {
      if (emailCount % 2 === 0) {
        sortedArr = studentsArr.sort((a, b) => {
          return a.email > b.email ? 1 : -1;
        });
      } else {
        sortedArr = studentsArr.sort((a, b) => {
          return b.email > a.email ? 1 : -1;
        });
      }
      break;
    }

    case "marks": {
      if (marksCount % 2 === 0) {
        sortedArr = studentsArr.sort((a, b) => {
          return a.total >= b.total ? 1 : -1;
        });
      } else {
        sortedArr = studentsArr.sort((a, b) => {
          return b.total >= a.total ? 1 : -1;
        });
      }
      break;
    }
  }
  loadTable(sortedArr);
}

// function to filter the user table
function filter(input) {
  let filterArr = [];
  switch (input) {
    case "male":
      filterArr = studentsArr.filter(element => {
        return element.gender === "Male";
      });
      break;

    case "female":
      filterArr = studentsArr.filter(element => {
        return element.gender === "Female";
      });
      break;
    default:
      filterArr = studentsArr;
  }
  loadTable(filterArr);
}

// function to search in the user table
function search(input) {
  input = input.toLowerCase();
  let filterArr = [];
  filterArr = studentsArr.filter(element => {
    var f_name = element.first_name.toLowerCase().indexOf(input);
    var l_name = element.last_name.toLowerCase().indexOf(input);
    var email = element.email.toLowerCase().indexOf(input);
    return f_name != -1 || l_name != -1 || email != -1;
  });
  loadTable(filterArr);
}

// calculate total marks
function totalMarks(english, maths, science) {
  return parseInt(english) + parseInt(maths) + parseInt(science);
}
