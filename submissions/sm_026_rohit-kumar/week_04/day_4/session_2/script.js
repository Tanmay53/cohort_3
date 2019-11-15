function test() {
    //alert('hello world')
    var elem = document.querySelector('h1') 
    alert(elem.innerHTML)
}


function changeFirstH1() {
    var elem = document.querySelector('h1') 
    //alert(elem.innerHTML)
    elem.style.color = "red"
}

function changeAllH3() {
    //alert('working')
    var elem = document.querySelectorAll('h3')
    for(var i = 0; i < elem.length; i++)
        elem[i].style.color = "green"
}

function changeAllH5() {
    var elem = document.querySelectorAll('h5')
    for(var i = 0; i < elem.length; i++) 
        elem[i].style.color = "blue"
}


function changeClass(cls) {
    var selector = "." + cls
    
    var elem = document.querySelectorAll(selector)
    for(var i = 0; i < elem.length; i++)
        elem[i].style.color = cls
    
}

function createH1() {
    alert('working')
    /* 
    var new_h1 = document.createElement('h1')
    h1.innerHTML = 'MASAI'

    // find div with id headings
    var elem_div = document.getElementsBy('headings')
    elem_div.appendChild(h1) */
}