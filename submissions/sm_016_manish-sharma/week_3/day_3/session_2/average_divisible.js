function avg(lim,num){
    var x = Math.floor(lim/num)
    var sums=0
    for(i=0;i<=x;i++){
        sums=sums+(num*i)
    }
    console.log(sums/x)    
}
avg(66,16)