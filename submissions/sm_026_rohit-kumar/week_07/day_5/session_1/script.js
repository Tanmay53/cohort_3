function redirectPage(url) {
    localStorage.setItem('url', url)
    window.location.href = 'user_repo.html'
}

function loadUsersInTable(users) {
    let rows = ''
    users.forEach((user, index) => {
        rows = rows + `<tr>
                            <td>${index + 1}</td>
                            <td>${user.id}</td>
                            <td>${user.login}</td>
                            <td>${user.repos_url}</td>
                            <td><a href=# onclick=redirectPage('${user.repos_url}')>Show Repos</a></td>
                       </tr>`
    });

    var table = `<table class='table mt-5'>
                    <tr>
                        <th>S.No</th>
                        <th>User ID</th>
                        <th>Username</th>
                        <th>Repo URL</th>
                        <th>Action</th>
                    </tr>
                    ${rows}
                 </table>`
    $('#displayTable').html(table)                 
}

function getUserData(query) {
    // using fetch function
    let url = 'https://api.github.com/search/users?q='
    fetch(`${url + query}`).then((res) => {
        return res.json()
    }).then((res) => {
        loadUsersInTable(res['items'])
    }).catch(() => {
        console.log('some error !')
    })
}   

$('#btnSubmit').click(() => {
    let usernames = $('#txtUsernames').val().split(',')
    query = usernames.map(name => `user:${name.trim()}`).join('+')
    
    //console.log(query)
    getUserData(query)
})

// entry point
$(document).ready(() => {
    //alert('works')
})