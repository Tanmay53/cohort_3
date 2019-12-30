window.addEventListener('load',function(){
    let currentUser = JSON.parse(localStorage.getItem('currentUser'))
    console.log('on user_repo page',currentUser)
    console.log(typeof currentUser)
    $('#owner').html(`<h4>Owner:</h4> ${currentUser.login}`)
    $('#id').html(`<h4>Id:</h4> ${currentUser.id}`)
    $('#avatar').attr("src",currentUser.avatar_url)
    console.log(currentUser.avatar_url)
    fetchRepos(currentUser.login)
})

function comeback(){
    window.location.replace('./index.html')
}  

const searchRepo = (username) =>{
    console.log('clicked username',username)
    return new Promise((resolve,reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open('GET',`https://api.github.com/users/${username}/repos`)
        xhr.send()
        xhr.onload = () =>{
            if(xhr.status === 200){
                resolve(xhr.response)
            }else{
                reject(xhr.status)
            }
        }
    })
} 

let fetchRepos = (username) =>{
    searchRepo(username)
    .then(res => JSON.parse(res))
    .then(res => appendRepos(res))
}

let appendRepos = (repos) =>{
    console.log(repos)
    let row = ''
    repos.forEach(repo=>{
        row = row +     `<tr>
                            <td>${repo.id}</td> 
                            <td><a target='_blank' href='${repo['html_url']}'>${repo.name}</a></td>
                            <td>${repo.pushed_at}</td>
                            <td>${repo.clone_url}</td>
                        </tr>`
        $('#tablebody').html(row)
    })
}