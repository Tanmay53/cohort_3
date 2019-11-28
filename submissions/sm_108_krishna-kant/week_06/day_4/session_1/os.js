$('#os').change(function() {
  createHTTPCall();
});
var table = document.getElementById('table');
var responseData;

function createHTTPCall() {
  $.ajax({
    url: `http://localhost:8080/codenames/${$('#os').val()}`
  }).done(data => {
    showUI(JSON.parse(data));
  });
}

// showUI
function showUI(data) {
  table.innerHTML = '';
  var tblr = document.createElement('tr');
  var tblh = document.createElement('th');
  tblh.innerText = data.os;
  tblr.appendChild(tblh);
  table.appendChild(tblr);
  data.codenames.forEach(function(val) {
    var tblr = document.createElement('tr');
    for (key in val) {
      var tbld = document.createElement('td');
      tbld.innerText = val[key];
      tblr.appendChild(tbld);
    }
    table.appendChild(tblr);
  });
}
