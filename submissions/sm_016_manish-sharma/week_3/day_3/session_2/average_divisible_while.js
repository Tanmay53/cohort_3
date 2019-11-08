function avg(lim,num){
    var x = Math.floor(lim/num)
    var sums=0
    var i=0
        while(i<=x){
            sums=sums+(num*i)
            i++ 
            }
    console.log(sums/x)
}

avg(800,91)