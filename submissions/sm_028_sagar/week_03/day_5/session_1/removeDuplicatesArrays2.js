var input = [10, 10, 10, 8, 9, 9, 6.33, 6.33, 'sagar', 45, 'sagar', 'Hi there']

//Invoking function

console.log(removeDuplicate(input));


//function for removing duplicate using object
function removeDuplicate(input) {

    var obj = {};

    for (var i = 0; i < input.length; i++) {

        obj[input[i]] = input[i];
    }


    return Object.values(obj);
}



//output:
// [ 8, 9, 10, 45, 6.33, 'sagar', 'Hi there' ]