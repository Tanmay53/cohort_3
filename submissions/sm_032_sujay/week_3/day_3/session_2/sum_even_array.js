var arrNo =[ 1,2,3,4,5,6,8,9,7,10] 
var sumEven=0
for(var i=0;i<arrNo.length;i++){
    if (arrNo[i]%2==0)
    {
        sumEven=sumEven+arrNo[i]
    }
}
console.log(sumEven)