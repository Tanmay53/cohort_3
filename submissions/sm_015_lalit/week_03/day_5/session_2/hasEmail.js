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
    console.log(inputmail, ":", result1)
}

emailverifier('dipanshugmail.com')
emailverifier('dipanshu@@gmail.com')
emailverifier('@gmail.com')
emailverifier('d@gmail.com')
emailverifier('.d@gmail.com')
emailverifier('dipanshu?@gmail.com')
emailverifier('dipan..shu@gmail.com')
emailverifier('dipanshu.sabharwal@gmail.com')
emailverifier('dipanshusabharwal@gmail.com')
emailverifier('aalinds.sharma@gmail.orag')
emailverifier('dipanshusabharwal@gmail.org')
emailverifier('dipanshusabharwal@.gmail.org')
emailverifier('dipanshu.sabharwal.masai@gmail.com')