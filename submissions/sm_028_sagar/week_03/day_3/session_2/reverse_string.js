var string = 'sagar';
var temp = [];
var reverse_string = '';

//Array for all characters
for (var i = 0; i < string.length; i++) {
    temp.push(string[i]);
}
// console.log(temp);
//reversing array
for (var i = temp.length - 1; i >= 0; i--) {
    reverse_string = reverse_string + temp[i];
}

console.log(reverse_string);

//TEST CASE:
// string = sagar 
// reverse_string = ragas