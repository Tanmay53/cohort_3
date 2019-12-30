var database = [];
// showing all data
$("#showData").click(() => {
  var data;
  console.log("loading");
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:8000/students");
  xhr.onload = function() {
    data = JSON.parse(xhr.response);
    database = data;
    data.forEach(ele => {
      $("#tbody").append(
        createTable(
          ele.id,
          ele.first_name,
          ele.last_name,
          ele.email,
          ele.gender,
          ele.english,
          ele.maths,
          ele.science
        )
      );
    });
  };
  xhr.send();
});
// ;function to create a table
function createTable(id, fname, lname, email, gender, eng, math, sci) {
  var table = "";
  var total = parseInt(eng) + parseInt(math) + parseInt(sci);
  table = `<tr>
    <td scope="col">${id}</td>
    <td scope="col">${fname}</td>
    <td scope="col">${lname}</td>
    <td scope="col">${email}</td>
    <td scope="col">${gender}</td>
    <td scope="col">${eng}</td>
    <td scope="col">${math}</td>
    <td scope="col">${sci}</td>
    <td scope="col">${total}</td>
  </tr>`;
  return table;
}
var ele;
$("#perPage").change(() => {
  $("#tbody td").remove();
  $("#tbody tr").remove();
  $("#buttons button").remove();
  var num = $("#perPage").val();
  for (let i = 0; i < num; i++) {
    ele = database[i];
    $("#tbody").append(
      createTable(
        ele.id,
        ele.first_name,
        ele.last_name,
        ele.email,
        ele.gender,
        ele.english,
        ele.maths,
        ele.science
      )
    );
  }
  // pagnation
  var nPage = 100 / num;
  // var count = 0;
  for (let j = 1; j <= nPage; j++) {
    // count++;
    $("#buttons").append(
      `<button class="btn btn-danger m-2 page" value=${j} onclick="changePage(${num})">${j}</button>`
    );
  }
});

function changePage(num) {
  var val = event.target.value;
  $("#tbody td").remove();
  $("#tbody tr").remove();
  $("#buttons button").remove();
  console.log(val);
  var initial = (val - 1) * num;
  for (let i = initial; i < initial + num; i++) {
    let ele = database[i];
    $("#tbody").append(
      createTable(
        ele.id,
        ele.first_name,
        ele.last_name,
        ele.email,
        ele.gender,
        ele.english,
        ele.maths,
        ele.science
      )
    );
  }
  var num = $("#perPage").val();
  let nPage = 100 / num;
  // var count = 0;
  for (let j = 1; j <= nPage; j++) {
    // count++;
    $("#buttons").append(
      `<button class="btn btn-danger m-2 page" value=${j} onclick="changePage(${num})">${j}</button>`
    );
  }
}
// search
$("#search").keyup(() => {
  var search = $("#search")
    .val()
    .toLowerCase();
  $("#tbody td").remove();
  $("#tbody tr").remove();
  database.forEach(ele => {
    if (ele.first_name.toLowerCase().includes(search)) {
      $("#tbody").append(
        createTable(
          ele.id,
          ele.first_name,
          ele.last_name,
          ele.email,
          ele.gender,
          ele.english,
          ele.maths,
          ele.science
        )
      );
    } else if (search.length == 0) {
      $("#tbody").append(
        createTable(
          ele.id,
          ele.first_name,
          ele.last_name,
          ele.email,
          ele.gender,
          ele.english,
          ele.maths,
          ele.science
        )
      );
    } else if (ele.email.includes(search)) {
      $("#tbody").append(
        createTable(
          ele.id,
          ele.first_name,
          ele.last_name,
          ele.email,
          ele.gender,
          ele.english,
          ele.maths,
          ele.science
        )
      );
    }
  });
});
