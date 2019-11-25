function consonants(letter) {
    var letter = letter || 'abcdEfg';
    count= 0;
    for (i = 0; i < letter.length; i++) {
        if (letter[i] != 'a' && letter[i] != 'e' && letter[i] != 'i' && letter[i] != 'o' && letter[i] != 'u' &&
            letter[i] != 'A' && letter[i] != 'E' && letter[i] != 'I' && letter[i] != 'O' && letter[i] != 'U') 
            {
                console.log(letter[i]);
                count++
            }
        }
        console.log(count)
    }
    consonants('beNgalURu')