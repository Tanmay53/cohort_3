function vowels(letter) {
    var letter = letter || 'abcdEfg'
    for (i = 0; i < letter.length; i++) {
        if (letter[i] == 'a' || letter[i] == 'e' || letter[i] == 'i' || letter[i] == 'o' || letter[i] == 'u' ||
            letter[i] == 'A' || letter[i] == 'E' || letter[i] == 'I' || letter[i] == 'O' || letter[i] == 'U') 
            {
                console.log(letter[i])
            }
        }
    }
    vowels('bengalUru')