var price = ['potato 100','colgate 80','chocolates 40','oats 40']
var items = []

function totalCost(x){

    for(i=0;i<x.length;i++){

        items[i] = x[i].split(' ');
        var val = Number(items[i][1])
        items[i][1] = val

    }

    var sum = items.map(function(e){
        
        return e[1];

    }).reduce(function(a,e){

        return a + e;

    });

    console.log(sum)

}

totalCost(price)