function reduceSum(arr1,k){
    var arrnew =[]
    arrnew =arr1.filter(function(element){
        return element > k
    })
    arrnew =arrnew.reduce(function(a,c){
        return a +c
    })
    console.log(arrnew)
}
reduceSum([10,15,6,8,6,6,50],6)