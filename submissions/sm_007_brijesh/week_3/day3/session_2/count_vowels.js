function count_vowel(vowel) {
    var count = 0
    for (i = 0; i < vowel.length; i++) {
        if (vowel[i] == "a" || vowel[i] == "e" || vowel[i] == "i" || vowel[i] == "o" || vowel[i] == "u" ||
        vowel[i] == "A" || vowel[i] == "E" || vowel[i] == "I" || vowel[i] == "O" || vowel[i] == "O") {

            count++
        }
    } return count
}
console.log(count_vowel("brijeshkumar"))
