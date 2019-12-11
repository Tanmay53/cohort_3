const different={
    array1:[1,2,3,4,5,6,4,7,5,8],
    array2:[7,8,3,4],
    difference:function(){
        var differenceArray=[];
        for (var i=0;i<this.array1.length;i++){
            if (this.array2.indexOf(this.array1[i])===-1){
                differenceArray.push(this.array1[i]);
            }
        }
        return differenceArray;
    }
    
}   
console.log(different.difference())