
function consonantCount(string) {
    var consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"
    var consonantCount = 0
    for (var i = 0; i < string.length; i++) {
        if (consonants.indexOf(string[i]) !== -1) {
            consonantCount++;
        }

    }
    return consonantCount;
}
console.log(consonantCount("Masai School is the best"))