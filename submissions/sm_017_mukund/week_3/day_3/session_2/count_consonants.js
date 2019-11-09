var vowels=['a','e','i','o','u','A','E','I','O','U']
var string='I am awesome'
var count=0                 // variable to store the counts of vowels inside a string
var space=' '               // variable to match the space inside a string


// function to count the consonants in a given string

function count_consonants(string){
    for(i=(string.length-1);i>=0;i--){
        
        for(j=0;j<10;j++){
            
            if (string[i] == vowels[j]){
                count++
                break;
            }
            if (string[i] == space){
                count++
                break;
            }
        }
    }
    
    console.log('Number of consonants : ',string.length-count)
}

count_consonants(string)            // function call