function deleteCard(id){
    id = Number(id)
    let collage = document.getElementById('collage') 
    let totaldiv = document.getElementsByClassName('collage-gallery')
    //  totaldiv = totaldiv.filter((div,i) => i != id)
    console.log(totaldiv)
    for(let i = 0; i < totaldiv.length; i++){
        if(id === i){
            collage.removeChild(totaldiv[i])
        }
    }
}


function addCard(){
    console.log('triggering')
    event.preventDefault()
    title = document.querySelector('#title').value
    content = document.querySelector('#content').value
    let collage = document.getElementById('collage') 
    let imgDiv = document.createElement('div')
    let img = document.createElement('img')
    img.setAttribute('src','https://via.placeholder.com/160?text=sofa-image')
    imgDiv.append(img)

    titleDiv = document.createElement('div')
    let h3 = document.createElement('h3')
    h3.textContent = title
    titleDiv.append(h3)

    contentDiv = document.createElement('div')
    let p = document.createElement('p')
    p.textContent = content
    contentDiv.append(p)
    let button = document.createElement('button')
    button.textContent = 'delete'
    contentDiv.append(button)

    let collageDiv = document.createElement('div')
    collageDiv.setAttribute('class','collage-gallery')
    collageDiv.appendChild(imgDiv)
    collageDiv.appendChild(titleDiv)
    collageDiv.appendChild(contentDiv)

    collage.appendChild(collageDiv)
}