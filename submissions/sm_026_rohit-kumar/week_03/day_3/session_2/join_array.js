function string_joiner(arr, char){
    var new_string = ""

    for(var i = 0; i < arr.length; i++){
        new_string = new_string + arr[i]
        if(i != arr.length-1)
            new_string = new_string + char
    }

    return new_string
}


// code execution starts here
var  char = ','
var arr   = ['r', 'a', 'm', 'i', 's', 'a', 'g', 'o', 'o', 'd', 'b', 'o', 'y']
//var arr   = [123, 456, 789]
var arr = ['ram', 'was', 'a', 'good', 'boy'] 

console.log("String after joining : ", string_joiner(arr, char))


/*

----------------Test Cases-----------------------
Input                                                               char                       Output
['r', 'a', 'm', 'i', 's', 'a', 'g', 'o', 'o', 'd', 'b', 'o', 'y']     -                         r-a-m-i-s-a-g-o-o-d-b-o-y
[123, 456, 789]                                                       *                         123*456*789
['ram', 'was', 'a', 'good', 'boy']                                    ,                         ram,was,a,good,boy

*/