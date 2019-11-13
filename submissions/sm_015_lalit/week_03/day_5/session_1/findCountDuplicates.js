function countduplicates(arr1,targetvalue){
len=arr1.length
count=0
for (i=0;i<len;i++){
    if(arr1[i]==targetvalue){
        count++
    }
    } 
    console.log(count)
}
// countduplicates([5,4,2,1,2,2],2)

inputObject={
    arr1:[5,4,2,1,2,2] ,
    targetvalue:2 ,
    countofduplicates:function(){
        console.log(countduplicates(this.arr1,this.targetvalue))
    }

} 
    inputObject.countofduplicates()
