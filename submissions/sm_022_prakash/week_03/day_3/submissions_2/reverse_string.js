// name = 'Masai'
// console.log(name.substr(1))
var reverse = ''

// function to reverse a given string
function reverseString(name){
        
for(i=name.length-1;i>=0;i--){
       
     reverse = reverse + (name[i])
        // console.log(reverse)
    }
    console.log(reverse)   
return name;
}
// calling the function 
reverseString('prakash')