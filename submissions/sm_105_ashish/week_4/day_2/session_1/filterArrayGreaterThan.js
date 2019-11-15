function filterTarget(input1,input2)
{
    var input1
    var input2
    var filtered=[]
    filtered=input1.filter(function(ele, currentIndex){
        return ele<input2
    })
    console.log(filtered)
}
filterTarget([12,5,17,13,4,6,8,2,6,3],6)