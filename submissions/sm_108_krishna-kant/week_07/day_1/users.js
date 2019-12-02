$(document).ready(function() {
  loadData(1);
});

function loadData(page) {
  $('#users').empty();
  $.ajax({
    method: 'GET',
    url: `https://reqres.in/api/users?page=${page}`
  }).done(function(data) {
    data.data.forEach(function(user) {
      var child = ` <li
          class="list-group-item d-flex justify-content-between align-items-center "
        >
          <span class="badge badge-primary">${user.id}</span>
          <span class="text-info">${user.first_name + user.last_name}</span>
          <span>${user.email}</span>
          <img
            src="${user.avatar}"
            class="img-fluid w-70"
            alt=""
          />
        </li>`;

      $('#users').append(child);
    });
  });
}

$('.page-link').click(function() {
  event.preventDefault();
  loadData($(this).html());
});
