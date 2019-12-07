class Github {
  constructor() {
    this.client_id = '94d099b8db8689bcbb11';
    this.client_secret = '5850f88c60d0e8f3a9462e040c7a166b29dd0e24';
    this.repos_count = 5;
    this.repos_sort = 'created : asc';
  }
  getUser(user) {
    fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    )
      .then(response => response.json())
      .then(response => {
        let ui = new UI();
        ui.showProfile(response);
        console.log(response);
        storageCtrl.storeRepoURL(response.repos_url);
        storageCtrl.storeUserName(response.name);
      });
  }
  getRepos(repos_url) {
    fetch(repos_url)
      .then(response => response.json())
      .then(response => {
        let ui = new UI();
        ui.showRepos(response);
      });
  }
}

class StorageController {
  storeRepoURL(url) {
    localStorage.setItem('url', url);
  }
  storeUserName(name) {
    localStorage.setItem('name', name);
  }
  getRepoURL() {
    return localStorage.getItem('url');
  }
  getUserName() {
    return localStorage.getItem('name');
  }
}
