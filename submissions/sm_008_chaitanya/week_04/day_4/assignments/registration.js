function user_registration() {
    var user_name = document.getElementById("name").value
    var user_email = document.getElementById("email").value
    var user_mobile = document.getElementById("mobile").value
    if (name_validate(user_name) === "valid name" && email_validate(user_email) === "valid Email" && mobile_validate(user_mobile) === "valid mobile") {
        var out = document.getElementById("output")
        var para_name = document.createElement('p')
        para_name.innerHTML = "NAME"
        para_name.style.fontSize = "20px";
        var para_name_user = document.createElement('p')
        para_name_user.innerHTML = user_name
        para_name_user.style.fontSize = "30px";
        out.appendChild(para_name)
        out.appendChild(para_name_user)

        var para_email = document.createElement('p')
        para_email.innerHTML = "EMAIL"
        para_email.style.fontSize = "20px";
        var para_email_user = document.createElement('p')
        para_email_user.innerHTML = user_email
        para_email_user.style.fontSize = "30px";
        out.appendChild(para_email)
        out.appendChild(para_email_user)

        var para_mobile = document.createElement('h1')
        para_mobile.innerHTML = "MOBILE"
        para_mobile.style.fontSize = "20px";
        var para_mobile_user = document.createElement('h2')
        para_mobile_user.innerHTML = user_mobile
        para_mobile_user.style.fontSize = "30px";
        out.appendChild(para_mobile)
        out.appendChild(para_mobile_user)

        var out = document.querySelector("#output")
        out.style.background = "black";
        out.style.color = "white";
        out.style.paddingLeft = "40px";

        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("mobile").value = ""
    }

    else {
        if (name_validate(user_name) === "Invalid name!") {
            var name_error = document.getElementById("error_name")
            name_error.innerHTML = "Enter a valid name"
            name_error.style.color = "red";
            name_error.style.fontSize = "25px";
        }
        if (email_validate(user_email) === "Invalid Email !") {
            var email_error = document.getElementById("error_email");
            email_error.innerHTML = "Enter a vaild email"
            email_error.style.color = "red";
            email_error.style.fontSize = "25px";
        }
        if (mobile_validate(user_mobile) === "Invalid mobile!") {
            var num_error = document.getElementById("error_mobile");
            num_error.innerHTML = "Enter a valid mobile"
            num_error.style.color = "red";
            num_error.style.fontSize = "25px";
        }
    }
}

function name_validate(name) {
    if (name.length < 3 || name.length > 10) {
        return "Invalid name!"
    }
    return "valid name"
}

function mobile_validate(mobile) {
    if (mobile.length !== 10) {
        return "Invalid mobile!"
    }
    return "valid mobile"
}

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
