$(document).ready(function() {
  // onload call ajax function to fetch user list
  ajax();

  // fetch userlist on page button click
  $("#pagination").on("click", "#page", function(e) {
    e.preventDefault();
    var page = $(this).val();
    alert(page);
    ajax(page);
  });
});

// ajax call
function ajax(page = 1) {
  $.ajax({
    type: "GET",
    url: "https://reqres.in/api/users",
    data: { page: page },
    dataType: "json",
    success: function(result, status, xhr) {
      console.log(status);
      console.log(result);
      console.log(xhr.status);
      if (xhr.status == 200) {
        showUsers(result);
      }
    },
    error: function(error, status, xhr) {
      console.log(xhr.status);
      alert("Result:" + status + "\nError Message:" + error);
    }
  });
}

// show user in table with pagination
function showUsers(result) {
  $("#userList").empty();
  $("#pagination").empty();
  result.data.forEach(user => {
    // create table
    var tr = $("<tr></tr>");
    tr.html(
      "<td class='align-middle'>" +
        user.id +
        "</td><td class='align-middle'>" +
        user.email +
        "</td><td class='align-middle'>" +
        user.first_name +
        "</td><td class='align-middle'>" +
        user.last_name +
        "</td><td><img src='" +
        user.avatar +
        "' class='img-fluid' width='100px' /></td>"
    );
    $("#userList").append(tr);
  });

  for (var i = 1; i <= result.total_pages; i++) {
    // create pagination
    var ul = $("<ul></ul>");
    ul.addClass("pagination justify-content-center");
    ul.html(
      '<li class="page-item"><button class="page-link" id="page" value="' +
        i +
        '">' +
        i +
        "</button></li>"
    );
    $("#pagination").append(ul);
  }
}
