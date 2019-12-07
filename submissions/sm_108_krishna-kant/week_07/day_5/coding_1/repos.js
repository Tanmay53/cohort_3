document.addEventListener('DOMContentLoaded', loadData);

function loadData() {
  let storage = new StorageController();
  let github = new Github();
  let reposUrl = storage.getRepoURL();
  let responseData = github.getRepos(reposUrl);
  let userName = storage.getUserName();
  document.querySelector('.display-4').innerHTML = userName;
}
