$(document).ready(function() {
  var repos = localStorage.getItem("repos");
  repos = JSON.parse(repos);
  //   var url = repos;
  console.log(repos[0].repos_url);
});
