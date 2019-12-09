function emailverifier(inputmail) {
    len = inputmail.length
    result1 = "False"
    count = 0
    for (i = 0; i < len; i++) {
        if (inputmail[i] == "@") {
            count++
        }
    }
    if (count == 0) {
        console.log(inputmail, ":", result1)
        return
    }

    for (i = 0; i < len; i++) {
        if (inputmail[i] == " " || inputmail[i] == "~" || inputmail[i] == "!" || inputmail[i] == "#" || inputmail[i] == "$" || inputmail[i] == "%" || inputmail[i] == "^" || inputmail[i] == "&" || inputmail[i] == "*" || inputmail[i] == "(" || inputmail[i] == ")" || inputmail[i] == "+" || inputmail[i] == "=" || inputmail[i] == "<" || inputmail[i] == ">" || inputmail[i] == "," || inputmail[i] == "/" || inputmail[i] == "?" || inputmail[i] == ":" || inputmail[i] == ";" || inputmail[i] == "'" || inputmail[i] == '"' || inputmail[i] == "{" || inputmail[i] == "}" || inputmail[i] == "[" || inputmail[i] == "]" || inputmail[i] == "|" || inputmail[i] == "\\") {
            console.log(inputmail, ":", result1)
            return
        }
        if (inputmail[i] == "@" && i != 0 && i < len - 4 && inputmail.indexOf("@", (inputmail.indexOf("@")) + 1) == -1) {
            result1 = "True"
        }
    }
    inputverified1 = inputmail.split("@")
    firstpart = inputverified1[0]
    lastpart = inputverified1[1]
    lenlastpart = lastpart.length
    lenfirstpart = firstpart.length
    count2 = 0
    for (i = 0; i < lenlastpart; i++) {
        if (lastpart[i] == ".") {
            count2++
        }
    }
    if (count2 == 0) {
        result1 = "False"
        console.log(inputmail, ":", result1)
        return
    }
    for (i = 0; i < lenfirstpart; i++) {
        if (firstpart[i] == "." && i == 0 || firstpart[i] == "." && i == (lenfirstpart - 1) || firstpart[i] == "." && firstpart[i + 1] == ".") {
            result1 = "False"
            console.log(inputmail, ":", result1)
            return
        }
        if (firstpart[i] == "-" && i == 0 || firstpart[i] == "." && i == lenfirstpart - 1 || firstpart.indexOf("-", (firstpart.indexOf("-")) + 1) !== -1) {
            result1 = "False"
            console.log(inputmail, ":", result1)
            return
        }
        if (firstpart[i] == "_" && i == 0 || firstpart[i] == "_" && i == lenfirstpart - 1 || firstpart.indexOf("_", (firstpart.indexOf("_")) + 1) !== -1) {
            result1 = "False"
            console.log(inputmail, ":", result1)
            return
        }
    }
    for (i = 0; i < lenlastpart; i++) {
        if (lastpart[i] == "." && i == 0 || lastpart[i] == "." && i >= (lenlastpart - 2) || lastpart[i] == "." && lastpart[i + 1] == ".") {
            result1 = "False"
            console.log(inputmail, ":", result1)
            return
        }
        if (lastpart[i] == "-" && i == 0 || lastpart[i] == "." && i >= (lenlastpart - 2) || lastpart.indexOf("-", (lastpart.indexOf("-")) + 1) !== -1) {
            result1 = "False"
            console.log(inputmail, ":", result1)
            return
        }
        if (lastpart[i] == "_" && i == 0 || lastpart[i] == "_" && i >= (lenlastpart - 2) || lastpart.indexOf("_", (lastpart.indexOf("_")) + 1) !== -1) {
            result1 = "False"
            console.log(inputmail, ":", result1)
            return
        }
    }
    return result1
}

function displayData() {
    var dName = document.getElementById("masaiDiv")
    var IName = document.getElementById("inputName").value
    dName.textContent = IName
    var dEmail = document.getElementById("emailinputDiv")
    var IEmail = document.getElementById("inputEmail").value
    dEmail.textContent = IEmail
    var dNumber = document.getElementById("mnumberDiv")
    var INumber = document.getElementById("inputMobile").value
    dNumber.textContent = INumber
}
var warnName = document.getElementById("nameWarn")
warnName.style.color = "red"
warnName.style.fontSize = "12px"
var warnEmail = document.getElementById("emailWarn")
warnEmail.style.color = "red"
warnEmail.style.fontSize = "12px"
var warnMobile = document.getElementById("mobileWarn")
warnMobile.style.color = "red"
warnMobile.style.fontSize = "12px"
warnMobile.style.marginTop = "15px"
isNameValid = "False"
isMobileValid = "False"
isEmailValid = "False"

document.getElementById("inputName").addEventListener("keyup", function () {
    var InputName = document.getElementById("inputName").value
    if (InputName.length > 10 || InputName.length < 3) {
        console.log(InputName.length)
        isNameValid = "False"
        warnName.textContent = "Invalid Name"
    } else {
        warnName.textContent = ""
        isNameValid = "True"
    }
})

document.getElementById("inputEmail").addEventListener("keyup", function () {
    var InputEmail = document.getElementById("inputEmail").value
    if (emailverifier(InputEmail) == "True") {
        console.log(InputEmail)
        isEmailValid = "True"
        warnEmail.textContent = ""
    } else {
        warnEmail.textContent = "Invalid Email"
        isEmailValid = "False"
    }
})

document.getElementById("inputMobile").addEventListener("keyup", function () {
    var InputMobile = document.getElementById("inputMobile").value
    if (InputMobile.length == 10) {
        console.log(InputMobile)
        isMobileValid = "True"
        warnMobile.textContent = ""
    } else {
        warnMobile.textContent = "Invalid Mobile"
        isMobileValid = "False"
    }
})

document.getElementById("btndiv").addEventListener("click", function () {
    if (isNameValid == "True" && isMobileValid == "True" && isEmailValid == "True") {
        displayData()
    }
})