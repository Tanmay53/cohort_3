function checkElementBefore(arr) {
var new_arr =    arr.map(function(element, index, arr){
                    // i to keep track of prev element
                    i = index - 1
                    if(i < 0)
                        return 1
                    else{
                        if (arr[i] > arr[index]) {
                            return -1
                        }
                        else{
                            return 1
                        }
                    }
                })
        return new_arr
}


var arr= [1,0,3,2,5,-1]
checkElementBefore(arr)

/*
---------------------------- Test Cases --------------------------------------------
Input                                                   Output
var arr= [4,3,2,1]                                      [ 1, -1, -1, -1 ]

var arr= [1,2,3,4,5]                                    [ 1, 1, 1, 1, 1 ]


var arr= [1,0,3,2,5,-1]                                 [ 1, -1, 1, -1, 1, -1 ]



*/