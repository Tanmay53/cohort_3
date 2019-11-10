function count_consonants(str){

    var asciiValue, totalAphabets=0, vowels=0
    // traversing string 
    for(var i=0;i<str.length;i++){
        // checking unicode to filter only alphabets
        asciiValue=str.charCodeAt(i)
        if( (asciiValue>=65 && asciiValue<=90) ||(asciiValue>=97 && asciiValue<=122)){
            totalAphabets+=1
            // checking for vowels
            switch(str[i]){
                case 'a':
                case 'A':
                case 'E':
                case 'e':
                case 'i':
                case 'I':
                case 'o':
                case 'O':
                case 'u':
                case 'U':
                    vowels++
            }
        }
            
    }
    // totalAlbets-vowels=consonants
    console.log('Alphabets:', totalAphabets, 'vowels: ', vowels)
    console.log('consonants: ',totalAphabets-vowels)
}

count_consonants("Masai School is trending!!")