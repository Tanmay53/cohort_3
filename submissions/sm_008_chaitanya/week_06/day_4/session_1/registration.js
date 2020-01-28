$(document).ready(function () {
    // your code goes here
    $("#reg_email").hide();
    $("#reg_mobile").hide();
    $("#btn").hide();

    //validation for username//
    $("#name").keyup(function () {
        var value_name = $("#name").val();
        $("#live_name").text(value_name)
        if (value_name.length > 3 && value_name.length < 10) {
            $("#reg_email").show();
            $("#live_name").text("")
            $("#para_name").text("")
        }
        else {
            $("#reg_email").hide();
            $("#para_name").text("Invalid name")
            $("#para_name").addClass("text-danger h4")
        }
    });
    //validation for user email//
    $("#email").keyup(function () {
        var value_email = $(this).val();
        $("#live_email").text(value_email)
        if (email_validate(value_email) === "valid Email") {
            $("#reg_mobile").show();
            $("#live_email").text("")
            $("#para_email").text("")
        }
        else {
            $("#reg_mobile").hide();
            $("#para_email").text("Invalid email")
            $("#para_email").addClass("text-danger h4")
        }
    });
    //validation for user mobile number//
    $("#mobile").keyup(function () {
        var value_mobile = $(this).val();
        $("#live_mobile").text(value_mobile)
        if (value_mobile.length === 10) {
            $("#btn").show()
            $("#live_mobile").text("")
            $("#para_mobile").text("")
        }
        else {
            $("#btn").hide()
            $("#para_mobile").text("Invalid Mobile Number")
            $("#para_mobile").addClass("text-danger h4")
        }
    });

});

//Display output after all the input validations are done//
$("#btn").click(function () {
    $("#main").hide();

    var out_name = document.createElement('h2')
    out_name.textContent = "NAME"
    var out_name_val = document.createElement('h1')
    out_name_val.setAttribute('class', 'mb-5 display-4')
    out_name_val.textContent = $("#name").val();
    var out_email = document.createElement('h2')
    out_email.textContent = "EMAIL"
    var out_email_val = document.createElement('h2')
    out_email_val.setAttribute('class', 'mb-5')
    out_email_val.textContent = $("#email").val();
    var out_mobile = document.createElement('h2')
    out_mobile.textContent = "MOBILE"
    var out_mobile_val = document.createElement('h1')
    out_mobile_val.textContent = $("#mobile").val();

    $("#out").append(out_name, out_name_val, out_email, out_email_val, out_mobile, out_mobile_val)
    $("#out").addClass('bg-dark m-5 p-5 mx-auto text-light')
    $('body').addClass('container')
});

//email validation supporting function//
function email_validate(email) {
    if (emailLength(email) === false) {
        return "Invalid Email !"
    }
    else if (atNotPresent(email) === false) {
        return "Invalid Email !"
    }
    else if (topLevelStartdot(email) === false) {
        return "Invalid Email !"
    }
    else if (atFirstAtLast(email) === false) {
        return "Invalid Email !"
    }
    else if (invalidDomains(email) === false) {
        return "Invalid Email !"
    }
    else if (doubleDots(email) === false) {
        return "Invalid Email !"
    }
    else if (allowedChar(email) === false) {
        return "Invalid Email !"
    }
    else if (MultiDomainCheck(email) === false) {
        return "Invalid Email !"
    }
    return "valid Email"
}
function emailLength(address) {
    var seperate = address.split("@")
    if (seperate.length !== 2) {
        return false
    }
    return true
}

function atNotPresent(address) {            // The email address must contain @
    if (address.indexOf("@") === -1) {
        return false
    }
    return true
}
function topLevelStartdot(address) {        // Top level domain should not start with dot(.)
    var str = address.split("@")
    var tld = str[1]
    if (tld[0] === ".") {
        return false
    }
    return true
}
function atFirstAtLast(address) {           // An email should not start and end with @ and dot(.)          
    if (address[0] === "@" || address[0] === "." || address[address.length - 1] === "@" || address[address.length - 1] === ".") {
        return false
    }
    return true
}
function invalidDomains(address) {          // An email must contain the valid domain name 
    var str = address.split("@")
    var domain = str[1]
    var str2 = domain.split(".")
    var last = str2[str2.length - 1]
    var valid_domain = ['com', 'net', 'org']
    for (var i = 0; i < last.length; i++) {
        if (valid_domain.indexOf(last) === -1) {
            return false
        }
    }
    return true
}
function doubleDots(address) {          // doubledots(..) are not allowed in an email address
    for (var i = 0; i < address.length; i++) {
        if (address[i] === "." && address[i + 1] === ".") {
            return false
        }
    }
    return true
}
function allowedChar(address) {         // only allowed chars of an email address
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-.'
    var arr = chars.split('');
    var divide = address.split("@")
    var prefix = divide[0]
    for (var i = 0; i < prefix.length; i++) {
        if (arr.indexOf(prefix[i]) === -1) {
            return false
        }
    }
    return true
}
function MultiDomainCheck(address) {    //checks If the domain name exist for multiple times in an email
    var cnt = 0
    for (var i = 0; i < address.length; i++) {
        if (address[i] === ".") {
            if (address[i + 1] + address[i + 2] + address[i + 3] === "com" || "org" || "net") {
                cnt++
            }
        }
    }
    if (cnt > 1) {
        return false
    }
    return true
}