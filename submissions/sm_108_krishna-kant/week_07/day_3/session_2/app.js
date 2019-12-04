let studentData;
let currentData;
$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

document.addEventListener('DOMContentLoaded', function() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'students.json', true);
  xhr.onload = () => {
    if (xhr.status == 200) {
      loadData(JSON.parse(xhr.response));
    } else {
      console.log(xhr.responseText);
    }
  };
  xhr.send();

  document.querySelector('#max').addEventListener('change', function(e) {
    refreshLimit(e.target.value);
  });
  document.querySelector('.pagination').addEventListener('click', function(e) {
    changePage(e);
  });
  document.querySelector('.email').addEventListener('click', function(e) {
    sortData('email');
  });
  document.querySelector('.total').addEventListener('click', function(e) {
    sortData('total_num');
  });
  let inputSearch = document.querySelectorAll('.search');
  inputSearch.forEach(function(input) {
    input.addEventListener('keyup', function(e) {
      filterData(e.target.value, e.target.id);
    });
  });
});

// Callback For Ajax Request of JSON File
function loadData(students) {
  studentData = students;
  studentData.forEach(function(student) {
    student.total_num = student.maths + student.english + student.science;
  });
  refreshLimit(10);
}

// Populate Table According to Given Object
function populateTable(students) {
  let tableBody = document.querySelector('.tbody');
  tableBody.innerHTML = '';
  students.forEach(student => {
    let tableRow = document.createElement('tr');
    let tableDesc = `
    <td class='font-weight-bolder'>${student.id}</td>
    <td>${student.first_name} ${student.last_name}</td>
    <td>${student.email}</td>
    <td>${student.gender}</td>
    <td>${student.english}</td>
    <td>${student.maths}</td>
    <td>${student.science}</td>
    <td class="text-danger">${student.total_num}</td>
    `;
    tableRow.innerHTML = tableDesc;
    tableBody.appendChild(tableRow);
  });
}

// Refreshing Maximum Limit
function refreshLimit(limit) {
  let limits = parseInt(limit);
  let limitedObject = [];
  for (let i = 0; i < limit; i++) {
    limitedObject.push(studentData[i]);
  }
  let pagination = document.querySelector('.pagination');
  pagination.innerHTML = '';
  for (var i = 1; i <= 100 / limit; i++) {
    let pageItem = document.createElement('li');
    let anchor = document.createElement('a');
    pageItem.classList.add('page-item');
    anchor.classList.add('page-link');
    anchor.href = '#';
    anchor.innerHTML = i;
    pageItem.appendChild(anchor);
    pagination.appendChild(pageItem);
  }
  currentData = limitedObject;
  populateTable(limitedObject);
}

// Changing Page : Pagination
function changePage(event) {
  event.preventDefault();
  if (event.target.classList.contains('page-link')) {
    let pageNumber = parseInt(event.target.innerHTML);
    let max = document.querySelector('#max').value;
    let lowerLimit = max * pageNumber - max;
    let upperLimit = max * pageNumber;
    let pageObject = [];
    for (let i = lowerLimit; i < upperLimit; i++) {
      pageObject.push(studentData[i]);
    }
    currentData = pageObject;
    populateTable(pageObject);
  }
}

function filterData(query, id) {
  let filteredStudents = [];
  if (id == 'srchName') {
    console.log(id);
    studentData.forEach(student => {
      if (student.first_name.toLowerCase().startsWith(query)) {
        console.log(student.first_name);
        filteredStudents.push(student);
      }
    });
  } else if (id == 'srchDomain') {
    console.log(id);
    studentData.forEach(student => {
      let cs = student.email.split('@');
      if (cs[1].startsWith(query)) {
        console.log(student.first_name);
        filteredStudents.push(student);
      }
    });
  } else if (id == 'srchEmail') {
    console.log(id);
    studentData.forEach(student => {
      if (student.email.startsWith(query)) {
        console.log(student.first_name);
        filteredStudents.push(student);
      }
    });
  }
  currentData = filteredStudents;
  populateTable(filteredStudents);
}

let toggler = 1;
//Sorting of Data
function sortData(parameter) {
  if (parameter == 'email') {
    var toggle = document.querySelector('#email-toggle');
  } else if (parameter == 'total_num') {
    var toggle = document.querySelector('#total-toggle');
  }

  let sortedData = sortObject(studentData, parameter, toggler);
  populateTable(sortedData);
  if (toggler == 1) {
    toggle.classList.remove('fa-chevron-circle-down');
    toggle.classList.add('fa-chevron-circle-up');
    toggler = 0;
  } else if (toggler == 0) {
    toggle.classList.remove('fa-chevron-circle-up');
    toggle.classList.add('fa-chevron-circle-down');
    toggler = 1;
  }
}

// Sorting of Object
function sortObject(currentData, parameter, toggler) {
  if (parameter == 'total_num') {
    if (toggler == 1) {
      currentData.sort(function(a, b) {
        return parseInt(a.total_num) - parseInt(b.total_num);
      });
    } else {
      currentData.sort(function(a, b) {
        return -parseInt(b.total_num) - parseInt(a.total_num);
      });
    }
  } else {
    if (toggler == 1) {
      currentData.sort(function(a, b) {
        const bandA = a[parameter].toUpperCase();
        const userB = b[parameter].toUpperCase();

        let compare = 0;
        if (bandA > userB) {
          compare = 1;
        } else if (bandA < userB) {
          compare = -1;
        }
        return compare;
      });
    } else {
      currentData.sort(function(a, b) {
        const bandA = a.email.toUpperCase();
        const userB = b.email.toUpperCase();

        let compare = 0;
        if (bandA < userB) {
          compare = 1;
        } else if (bandA > userB) {
          compare = -1;
        }
        return compare;
      });
    }
  }
  return currentData;
}
