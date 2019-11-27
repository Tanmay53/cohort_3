function joinArray() {
    var arr = ["ive", "ove", "augh"]
    var inpt = "L"
    var out = ""
    for (var i = 0; i <arr.length; i++) {
        out += inpt + arr[i]
    }
    console.log(out)
}
joinArray()