//Function to find total cost of items.
function totalCost(arr) {
    var total = arr.reduce(function(acc, element) {
        return acc + Number(element.split(' ')[1]);
    }, 0);
    return total;
}


/* Test Case :- 
   I/P :- ['Item1 200', 'Item2 300', 'Item3 400', 'Item4 129']  O/P :- 1029
*/