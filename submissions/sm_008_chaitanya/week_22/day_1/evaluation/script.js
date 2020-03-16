var dataArr=[]
function process(){
    let name=document.getElementById('name').value
    let source=document.getElementById('url').value
    let description=document.getElementById('desp').value
    let services=document.getElementById('services').value

    if(name=='' || source=='' || description=='' || services=='--'){
        alert('Please Fill all the fields !')
        return
    }
    var dataObj={
        name:name,
        source:source,
        description:description,
        services:services
    }
    dataArr.push(dataObj)
    createCard(dataArr)
}

function createCard(data){
    let displayLoc=document.getElementById('display')
    displayLoc.innerHTML=""
    for(let i=0;i<data.length;i++){
        let div=document.createElement('div')
        div.innerHTML=""

        let image=document.createElement('img')
        image.setAttribute('src',data[i]['source'])
        image.style.height="200px"
        image.setAttribute('class','zoom')

        let name=document.createElement('h2')
        name.innerHTML=data[i]['name']
        name.style.marginLeft="25%"

        let seva=document.createElement('p')
        seva.innerHTML=data[i]['services']
        seva.style.color="red"
        seva.style.marginLeft="5%"

        let content=document.createElement('h2')
        content.innerHTML=data[i]['description']
        content.style.marginLeft="5%"

        let deleteBtn=document.createElement('button')
        deleteBtn.innerHTML="Delete"
        deleteBtn.setAttribute('class','delbtn')
        deleteBtn.addEventListener('click',remove)

        div.append(image,name,seva,content,deleteBtn)
        div.setAttribute('class','resultMove shadow')

        displayLoc.append(div)
        displayLoc.setAttribute('class','resultDisplay')

        function remove(){
            div.remove()
        }
    } 
}

function reset(){
    document.getElementById('name').value=''
    document.getElementById('url').value=''
    document.getElementById('desp').value=''
    document.getElementById('services').value='--'
}

