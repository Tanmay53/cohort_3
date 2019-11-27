function checkElementBefore(arr){
    var total= arr.filter((e)=> typeof(e)=='number').reduce((a,e)=> a+e)
    console.log(total)
}

checkElementBefore(['item1',2,'item2',5,'item3',4])

