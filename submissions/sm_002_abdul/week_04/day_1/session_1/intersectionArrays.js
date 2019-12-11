const intersec={
    array1:[1,2,3,4],
    array2:[7,8,3,4],
    intersection:function(){
        var intersectionArray=[];
        for (items of this.array1){
            for (vals of this.array2){
                if (items===vals){
                    intersectionArray.push(items);
                }
            }
        }
        return intersectionArray;
    }
}

console.log(intersec.intersection())