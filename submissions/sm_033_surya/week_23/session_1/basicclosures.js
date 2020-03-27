function sum(a){
    return function (b){
        return function(c){
            return function(d) {
                return a+b+c+d
            }
        }
    }
}

console.log(sum(3)(5)(10)(2))