function squareElements(arr)
{
    arr.forEach(function(ele, i, arr){
        arr[i] = (ele*ele).toFixed(3);
    });
    return arr;
}

var height = [5.5, 5.6, 6.1, 6.2, 5.10];
console.log("The square of height array is :", squareElements(height));