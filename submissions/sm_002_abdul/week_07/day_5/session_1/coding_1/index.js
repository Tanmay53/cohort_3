$('#button').click(function(){
  var username=$('#user').val();
  console.log(username)

  fetch(`https://api.github.com/search/users?q=${username}`)
  .then((resp)=>resp.json())
  .then((json)=>json.items)
  .then(res=>{
      //console.log(res);
      printData(res);
    })

  function printData(arr){
    var body=document.querySelector('body');
    var table=document.createElement('table');
    $(table).html('')
    $(table).addClass('table text-center')
    var headingRow=document.createElement('tr');

    var pictureHeading=document.createElement('th');
    var loginHeading=document.createElement('th');
    var scoreHeading=document.createElement('th');
    var userProfileHeading=document.createElement('th');
    var showButtonHeading=document.createElement('th');

    $(pictureHeading).text('Photo');
    $(loginHeading).text('Login Name');
    $(scoreHeading).text('Score');
    $(userProfileHeading).text(`User Profile`)
    $(showButtonHeading).text('Show Repos');

    $(headingRow).append(pictureHeading);
    $(headingRow).append(loginHeading);
    $(headingRow).append(scoreHeading);
    $(headingRow).append(userProfileHeading);
    $(headingRow).append(showButtonHeading);

    $(table).append(headingRow);

    for (var i=0;i<arr.length;i++){
      //console.log(arr[i])
      var row=document.createElement('tr');

      var pictureBlock=document.createElement('td');
      var loginBlock=document.createElement('td');
      var scoreBlock=document.createElement('td');
      var userProfileBlock=document.createElement('td');
      var showReposButtonBlock=document.createElement('td');
      
      var userPicture=document.createElement('img');
      userPicture.setAttribute('src',`${arr[i].avatar_url}`);
      userPicture.setAttribute('height',`30`);
      userPicture.setAttribute('width',`30`);
      $(pictureBlock).append(userPicture);


      $(loginBlock).text(`${arr[i].login}`);

      $(scoreBlock).text(`${arr[i].score}`);

      var userLink=document.createElement('a');

      userLink.setAttribute('target','blank');

      $(userLink).html(`<a href=${arr[i].html_url}>${arr[i].html_url}</a>`);
      //console.log(userLink);
      $(userProfileBlock).append(userLink);

      var showReposBtn=document.createElement('button');
      $(showReposBtn).text('Show Repos');
      showReposBtn.setAttribute('value',`${arr[i].repos_url}`);
      $(showReposButtonBlock).append(showReposBtn);

      showReposBtn.addEventListener('click',function(event){
        var clickedUser=event.target.value;
        console.log(clickedUser);
        localStorage.setItem('reposUrl',clickedUser);
        window.location.href=("/home/rahul-b/repos/cohort_3/submissions/sm_002_abdul/week_07/day_5/session_1/coding_1/user_repo.html");
      })


      $(row).append(pictureBlock);
      $(row).append(loginBlock);
      $(row).append(scoreBlock);
      $(row).append(userProfileBlock);
      $(row).append(showReposButtonBlock);
      

      $(table).append(row);      
    }
    $(body).append(table);
  }

})