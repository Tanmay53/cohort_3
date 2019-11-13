arr=[5,7,9,11,43,56,99];

array=arr.reduce(function(a, b){
    return a+b;
},0);

console.log(array);