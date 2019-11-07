var vowels=['a','e','i','o','u','A','E','I','O','U']
var string='I am awesome'
var count=0                 // variable to store the counts of vowels inside a string

// function to count the vowels in a given string

function count_vowels(string){
    for(i=(string.length-1);i>=0;i--){
        
        for(j=0;j<10;j++){
            
            if (string[i]==vowels[j]){
                count++
                break;
            }
        }
    }
    console.log('Number of vowels : ',count)
}

count_vowels(string)            // function call