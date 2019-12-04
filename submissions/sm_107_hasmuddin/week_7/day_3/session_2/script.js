var students = [];
$(document).ready(function() {
  $.ajax({
    url: "/students.json"
  }).done(function(data) {
    $("tbody").empty();
    table(data);
    students.push(data);
  });
});

// getting data and printing on tables

function table(userData) {
  for (var i = 0; i < userData.length; i++) {
    var userRow = document.createElement("tr");
    let userDataValues = [
      userData[i].id,
      userData[i].first_name,
      userData[i].last_name,
      userData[i].email,
      userData[i].gender,
      userData[i].english,
      userData[i].maths,
      userData[i].science,
      `${userData[i].english + userData[i].maths + userData[i].science}`
    ];
    for (var j = 0; j < 9; j++) {
      col = document.createElement("td");
      col.textContent = userDataValues[j];
      userRow.appendChild(col);
    }
    $("tbody").append(userRow);
  }
  $("tr:nth-of-type(2n+1)").attr("class", "bg-dark text-white");
  $("tr:nth-of-type(2n)").attr("class", "bg-info text-white");
  $("table").attr("class", "border border-dark shadow table");
}

//sort by name function
var sortFirstName = document.getElementById("sortFirstName");
sortFirstName.addEventListener("change", sortingByName);
function sortingByName() {
  let sortedData = students[0];
  let nameVal = $("#sortFirstName").val();
  if (nameVal == "asc") {
    $("tbody").empty();
    function ascend(a, b) {
      setA = a.first_name;
      setB = b.first_name;
      comparison = 0;
      if (setA > setB) {
        comparison = 1;
      } else if (setA < setB) {
        comparison = -1;
      }
      return comparison;
    }
    sortedData.sort(ascend);
    table(sortedData);
  } else if (nameVal == "desc") {
    $("tbody").empty();
    function descend(a, b) {
      setA = a.first_name;
      setB = b.first_name;
      comparison = 0;
      if (setA > setB) {
        comparison = -1;
      } else if (setA < setB) {
        comparison = 1;
      }
      return comparison;
    }
    sortedData.sort(descend);
    table(sortedData);
  }
}
// work on it  vvvvvv
//filter by gender;
var genderSelect = document.getElementById("sortGender");
genderSelect.addEventListener("change", changeGender);

function changeGender() {
  //   $("tbody").empty();
  var genderData = students[0];
  //   console.table(genderData);
  genderVal = $("#sortGender").val();
  if (genderVal == "male") {
    var onlyMale = genderData.filter(function(value) {
      return value.gender == "male";
    });
    table(onlyMale);
    console.log(onlyMale);
  }
}
