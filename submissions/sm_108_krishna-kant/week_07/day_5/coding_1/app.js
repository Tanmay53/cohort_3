const searchUser = document.getElementById('searchUser');
const showProfile = document.getElementById('profile');
const github = new Github();
const storageCtrl = new StorageController();
searchUser.addEventListener('keyup', e => {
  // get input text
  const userText = e.target.value;

  if (userText !== '') {
    //   Make http call
    github.getUser(userText);
  }
});

showProfile.addEventListener('click', e => {
  if (e.target.classList.contains('show-profile')) {
    window.location.href = 'user_repo.html';
  }
});
