
$("#get-btn").click(function () {
  var os = $(".os").val()
  // console.log(os)
  var link = "http://localhost:8080/codenames/" + os
  $.ajax({
    url: link,
  })
    .done(function (data) {
      var data = JSON.parse(data)
      printData(data)
      // console.log(data.codenames[0]);
    });
});
function printData(data) {
  $(".tableForm").html("")
  // console.log(data.codenames.length)
  var tr = document.createElement("tr")
  var td = document.createElement("td")
  td.innerHTML = "NAME"
  tr.append(td)
  var td = document.createElement("td")
  td.innerHTML = "VERSION"
  tr.append(td)
  $(".tableForm").append(tr)
  for (i = 0; i < data.codenames.length; i++) {
    var tr = document.createElement("tr")
    var td = document.createElement("td")
    td.textContent = data.codenames[i].name
    tr.appendChild(td)
    var td = document.createElement("td")
    td.textContent = data.codenames[i].version
    tr.appendChild(td)
    $(".tableForm").append(tr)
  }
}