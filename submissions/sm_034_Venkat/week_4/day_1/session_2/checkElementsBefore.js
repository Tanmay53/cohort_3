function checkElementsBefore(x) {
    var ans= []
    for(i= 0; i< x.length; i++) {
        if(x[i] < x[i-1]) {
            ans.push('-1')
        }
        else {
            ans.push('1')
        }
    }
    console.log(ans)
}
checkElementsBefore([5,9,3,2,0,1,2,7,1,8])