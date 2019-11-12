// accumulate the sum in acc
function reduceCost(arr) {
    var res = arr.reduce(function(acc, element){
                return acc + element.price
            },0)

            return res
}

// arrray contains key value pairs
var arr = [{'item' : 'item1',
            'price' : 100 },
            {'item' : 'item2',
            'price' : 200 },
            {'item' : 'item3',
            'price' : 700 }] 
            
console.log(reduceCost(arr))

/*
------------------------------------------- Test Cases -------------------------------------------------------
Input                        
                                                           Output
[{'item' : 'item1',
            'price' : 100 },
            {'item' : 'item2',
            'price' : 200 },
            {'item' : 'item3',
            'price' : 300 }]                                600

[{'item' : 'item1',
            'price' : 100 },
            {'item' : 'item2',
            'price' : 200 },
            {'item' : 'item3',
            'price' : 700 }]                                1000




*/