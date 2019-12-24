$('#submit').click(()=>{
    let input = $('#input').val().trim()
    fetchApi(input)
})



const searchUser = (input) => {
    console.log('promise start')
    return new Promise( (resolve,reject) =>{
       let  xhr = new XMLHttpRequest()
        xhr.open('GET','https://api.github.com/search/users?q='+input)
        xhr.send()
        xhr.onload = ()=>{
            if(xhr.status === 200){
                resolve(xhr.response)
            }else{
                reject(xhr.status)
            }
        }
   })
}

let fetchApi = (input) =>{
    searchUser(input)
    .catch(res => console.log('err',res))
    .then(res => JSON.parse(res))
    .then(res => appendTable(res))
}


const appendTable = (res) =>{
    console.log(res)
    //removing
    $('#tablebody').empty()

    res['items'].forEach((element,i,arr) => {
        createUser(element,arr)       
    });          
}


const createUser = ({id:id,login:login,type:type,score:score},arr) =>{
    let tr = document.createElement('tr')
    let td = document.createElement('td')
    td.textContent = id;
    tr.append(td)
    td = document.createElement('td')
    td.textContent = login;
    tr.append(td)
    td = document.createElement('td')
    td.textContent = type;
    tr.append(td)
    td = document.createElement('td')
    td.textContent = score;
    tr.append(td)
    let btn = document.createElement('button')
    btn.setAttribute('btnid',id)
    btn.setAttribute('target','_blank')
    btn.setAttribute('class','btn btn-sm btn-primary')
    btn.innerHTML = 'check repo'

    //adding event listener on btn
    btn.addEventListener('click',function(){
        let btnid = Number(this.getAttribute('btnid'))
        let sample = arr.filter((e)=>e.id === btnid)
        sample = JSON.stringify(sample[0])
        localStorage.setItem('currentUser',sample)
        window.location.replace('./user_repo.html')
        console.log(sample,arr,btnid)
    })  

    tr.append(btn)
    $('#tablebody').append(tr)
}
