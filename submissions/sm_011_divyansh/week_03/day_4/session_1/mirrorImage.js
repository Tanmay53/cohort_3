function mirrorImg(input) {
    var letters = 'abcdefghijklmnopqrstuvwxyz';
    var mirror = ''

    for (var i = 0; i < input.length; i++) {
        if (input[i] == input[i].toUpperCase()) {
            lower = input[i].toLowerCase();
            index = letters.indexOf(lower);
            mirror+= letters[25 - index].toUpperCase()
        }
        else {
            index = letters.indexOf(input[i])

            mirror+= letters[25 - index]
        }
    }
    console.log(mirror)
}
mirrorImg('AbCd')   





