$('#display').hide()
$('#cont2').hide()
$('#cont3').hide()
$('#reg').hide()
$('#p1').hide()
$('#p2').hide()
$('#p3').hide()

// var name=$('#name').val()
// var email=$('#email').val()
// var mobile=$('#mobile').val()

$('#name').keyup(function () {
    var name = $(this).val()
    if (f_name(name) == false) {
        $('#p1').show()
        $('#cont2').hide()
    }
    else if (f_name(name) == true) {
        $('#p1').hide()
        $('#cont2').show()
    }
})

$('#email').keyup(function () {
    var email = $(this).val()
    if (f_email(email) == false) {
        $('#p2').show()
        $('#cont3').hide()
    }
    else if (f_email(email) == true) {
        $('#p2').hide()
        $('#cont3').show()
    }
})

$('#mobile').keyup(function () {
    var mobile = $(this).val()
    if (f_mobile(mobile) == false) {
        $('#p3').show()
        $('#reg').hide()
    }
    else if (f_mobile(mobile) == true) {
        $('#p3').hide()
        $('#reg').show()
    }
})

$('#reg').click(function () {
    var name = $('#name').val()
    var email = $('#email').val()
    var mobile = $('#mobile').val()
    $('#d-name').text(name)
    $('#d-email').text(email)
    $('#d-mobile').text(mobile)
    $('#cont').hide()
    $('#display').show()
})



function f_name(str) {
    N = str.length
    if (N < 3 || N > 10) {
        // console.log(typeof(str))
        return false

    }
    else {
        return true
    }
}

function f_mobile(str) {
    N = str.length
    if (N == 10) {
        return true
    }
    else {
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