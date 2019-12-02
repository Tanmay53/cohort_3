// action on document load
$("#show").click(function() {
  $("#next").click(function() {
    window.location = "users.html";
  });
  var page = 1;
  xhr = new XMLHttpRequest();
  xhr.open("GET", "https://reqres.in/api/users?page=" + page);
  xhr.send();
  xhr.onload = function() {
    if ((xhr.status = 200)) {
      var response = JSON.parse(xhr.response);
      var data = response.data;
      console.log(data);
      data.forEach(function(ele) {
        $(".table").append(
          // append the values to the the table in loop
          showData(ele.id, ele.email, ele.first_name, ele.last_name, ele.avatar)
        );
      });
    }
  };
});
// to print table data
function showData(id, email, first_name, last_name, avatar) {
  var users = "";
  users = `
    <tbody>
      <tr text-center>
        <th scope="row">${id}</th>
        <td>${first_name}</td>
        <td>${last_name}</td>
        <td>${email}</td>
        <td><img style="float:right;" src="${avatar} "><td>
      </tr>
    </tbody>
  </table>`;
  return users;
}
