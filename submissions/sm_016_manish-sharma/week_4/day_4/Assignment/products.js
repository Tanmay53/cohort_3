window.onload= function(){
    var button=document.getElementById('submit')
    button.textContent='Submit'
}

var table = document.getElementById('table')
i=0
function update() {
    var name = document.getElementById('name')
    var image = document.getElementById('image')
    var price = document.getElementById('price')


    var tr = document.createElement('tr')
    table.appendChild(tr)
    tr.setAttribute('id',i)
    i++
    // console.log(tr)
    var td1 = document.createElement('td')
    tr.appendChild(td1)
    td1.textContent=name.value
    var td2 = document.createElement('img')
    tr.appendChild(td2)
    td2.setAttribute('src',image.value)
    var td3 = document.createElement('td')
    tr.appendChild(td3)
    td3.textContent=price.value
    var td4 = document.createElement('button')
    tr.appendChild(td4)
    td4.style.margin = 20+'px'
    td4.textContent='Delete'
    td4.setAttribute('class','delete')
    var td5 = document.createElement('button')
    tr.appendChild(td5)
    td5.style.margin = 20+'px'
    td5.textContent='Edit'
    td5.setAttribute('class','edit')

    name.value = ''
    image.value = ''
    price.value = ''


    for(j=0;j<d.length;j++){
        d[j].addEventListener("click",del)
    }
    for(k=0;k<e.length;k++){
        e[k].addEventListener("click",edit)
    }

    var button=document.getElementById('submit')
    button.textContent='Submit'
}

var sub = document.getElementById('submit')
sub.addEventListener("click", update)


var d = document.getElementsByClassName('delete')
function del(){
    var x = this.parentElement.id
    // console.log(x)
    var parent= document.getElementById(x)
    parent.innerHTML=''
    
}

var e = document.getElementsByClassName('edit')
function edit(){
    var name = document.getElementById('name')
    var image = document.getElementById('image')
    var price = document.getElementById('price')
    
    var x = this.parentElement.id
    var row= document.getElementById(x)
    var select= row.querySelectorAll('td')
    var selImg= row.querySelector('img')
    name.value=select[0].textContent
    image.value=selImg.getAttribute('src')
    price.value=select[1].textContent

    var button= document.getElementById('submit')
    button.innerHTML='Update'
}

