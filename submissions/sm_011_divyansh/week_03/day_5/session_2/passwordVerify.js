function verifypass(object, pass) {
    if(object.password === pass) {
        console.log(true)
        return true;
    } else {
        console.log(false)
        return false;
    }
}

verifypass({ email: "div@gmail.com", password: "123abc"}, "123abcd");
