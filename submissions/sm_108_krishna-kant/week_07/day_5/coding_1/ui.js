class UI {
  constructor() {
    this.display = document.querySelector('#profile');
  }
  showProfile(user) {
    this.display.innerHTML = `<div class="card card-body mb-3">
      <div class="row">
      <div class="col-md-3">
      <img class="img-fluid mb-3" src="${user.avatar_url}"/>
      <a href="${
        user.html_url
      }" target="_blank" class="btn btn-primary btn-block mb-3">View Profile</a>
      </div>
      <div class="col-md-9">
      <span class="badge badge-primary">Public Repos : ${
        user.public_repos
      }</span>
      <span class="badge badge-secondary">Public Gists : ${user.public_gist ||
        0}</span>
      <span class="badge badge-success">Follower : ${user.followers}</span>
      <span class="badge badge-info">Following : ${user.following}</span>
      <br><br>
      <ul class="list-group">
        <li class="list-group-item">Company : ${user.company}</li>
        <li class="list-group-item"> Blog : ${user.blog}</li>
        <li class="list-group-item">Location : ${user.location}</li>
        <li class="list-group-item">Member Since : ${user.created_at}</li>
      </ul>
      <input type="button" class= "btn btn-primary m-3 show-profile" value ="Show Repos" />
      </div>
      </div>
      </div>
     `;
  }

  showRepos(repos) {

    let output = '';
    repos.forEach(function(repo) {
      output += `
      <div class="card card-body mb-2">
      <div class="row">
        <div class="col-md-6">
        <a href="${repo.html_url}" target="_blank" >${repo.name}</a> 
        </div>
        <div class="col-md-6">
        <span class="badge badge-primary">Stars : ${repo.stargazers_count}</span>
        <span class="badge badge-secondary">Watching : ${repo.watchers_count}</span>
        <span class="badge badge-success">Forks : ${repo.forks_count}</span>
        </div>
      </div>
      </div>
      `;
    });

    document.getElementById('repos').innerHTML = output;
  }
}
