
function register(){
    var name =document.getElementById("name").value
    var email =document.getElementById('email').value
    var mobile =document.getElementById('mobile').value

    var dname =document.getElementById('d-name')
    var demail =document.getElementById('d-email')
    var dmobile =document.getElementById('d-mobile')
    

    if(f_name(name)==true && f_email(email)==true && f_mobile(mobile)==true){
        dname.innerHTML=name
        demail.innerHTML=email
        dmobile.innerHTML=mobile
    }
    if(f_name(name)==false){
        var cont= document.getElementById('cont1')
        // var x = document.querySelector('.cont1 > p')
        // x.innerHTML=''
        var p1 = document.createElement('p')
        cont.appendChild(p1)
        p1.textContent='Enter a valid name'
        p1.setAttribute('style','color:red')
    }
    if(f_email(email)==false){
        var cont= document.getElementById('cont2')
        var p2 = document.createElement('p')
        cont.appendChild(p2)
        p2.textContent='Enter a valid email'
        p2.setAttribute('style','color:red')
    }
    if(f_mobile(mobile)==false){
        var cont= document.getElementById('cont3')
        var p3 = document.createElement('p')
        cont.appendChild(p3)
        p3.textContent='Enter a valid mobile number'
        p3.setAttribute('style','color:red')
    }
    name=''
    email=''
    mobile=''
}

function f_name(str){
    N=str.length
    if(N<3 || N>10){
        // console.log(typeof(str))
        return false
        
    }
    else{
        return true
    }
}

function f_mobile(str){
    N=str.length
    if(N==10){
        return true
    }
    else{
        return false
    }

}

function f_email(Object) {
    if (attherate(Object) == true && dot1(Object) == true && validTld(Object) == true && validch(Object) == true && dot2(Object) == true) {
        return true
    }
    else {
        return false
    }
}

function attherate(inEmail) {
    var cnt = 0
    for (i = inEmail.indexOf('@') + 1; i < inEmail.length; i++) {
        if ('@' !== inEmail[i]) {
            cnt = cnt + 0
        }
        else {
            cnt++
        }
    }
    if (inEmail.indexOf('@') == 0) {
        return false
    }
    else if (inEmail.indexOf('@') == -1) {
        return false
    }
    else if (cnt > 0) {
        return false
    }
    else {
        return true
    }
}

function dot1(inEmail) {
    oc = inEmail.indexOf('@')
    if (inEmail.indexOf('.') == 0) {
        return false
    }
    else if (inEmail[oc + 1] === '.') {
        return false
    }
    else {
        return true
    }

}

function validTld(inEmail) {
    dmn = inEmail.substring(inEmail.length - 3)
    if (dmn === 'org' || dmn === 'com' || dmn === 'net') {
        return true
    }
    else {
        return false
    }
}

var ch = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890-_@.'
function validch(inEmail) {
    var cnt = 0
    var cntar = []
    for (i = 0; i < inEmail.length; i++) {
        if (ch.indexOf(inEmail[i]) == -1) {
            return false
        }
    }
    return true
}

function dot2(inEmail) {
    for (i = 0; i < inEmail.length; i++) {
        if (inEmail[i] === '.') {
            if (inEmail[i + 1] === '.') {
                return false
            }
        }
    }
    return true
}