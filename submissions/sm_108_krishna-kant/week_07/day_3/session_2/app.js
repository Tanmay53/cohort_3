let studentData;
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
});

// Callback For Ajax Request of JSON File
function loadData(students) {
  studentData = students;
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
    <td class="text-danger">${student.science +
      student.english +
      student.maths}</td>
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
  populateTable(limitedObject);
}

// Changing Page
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
    populateTable(pageObject);
  }
}
