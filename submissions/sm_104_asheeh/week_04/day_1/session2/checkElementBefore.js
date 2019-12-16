function checkElementBefore(arr)
{
    var newArr = arr.map(function(ele, i, arr){
        
        if(i>0 && arr[i-1] > arr[i])
        {
            ele = -1;
            return ele;
        }
        else
        {
            ele = 1;
            return ele;
        }
    });
    return newArr;
}

var marks = [12, 13, 10, 23, 20];
console.log(checkElementBefore(marks));