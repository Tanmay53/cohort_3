// UI variables
var select = document.querySelector('#select-box');
var output = document.querySelector('#output');


// Add listener
select.addEventListener('change', function () {
  console.log(select.value)
  $.ajax({
    method: 'GET',
    url: 'https://indreed.herokuapp.com' + select.value,
  })
    .done(function (res) {
      printData(res)
    });
})

// Print data on UI
function printData(data) {
  // console.log(data)
  var show = '';
  data.forEach(function (val) {
    // Store data in variable
    show += `
              <br><br>
              <ul>
                <li><h5>Id:</h5> ${val.id}</li>
                <br>
                <li><h5>Title:</h5> ${val.title}</li>
                <br>
                <li><h5>Source:</h5> ${val.source}</li>
                <br>
                <li><h5>Company:</h5> ${val.company}</li>
                <br>
                <li><h5>Location:</h5> ${val.location}</li>
                <br>
                <li><a href="${val.url}">Click to visit</a></li>
                <br>
                <li><h5>Summary:</h5> ${val.summary}</li>
              </ul>
              <br><hr>
    `
    // console.log(val.id)
  })
  // Showing on UI
  output.innerHTML = show;
}
