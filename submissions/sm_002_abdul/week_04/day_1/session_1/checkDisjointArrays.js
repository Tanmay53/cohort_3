var obj={
    array1:[1,2,3,4],
    array2:[5,6,7,8],
    checkForDisjoint:function(){
        for (var i=0;i<this.array1.length;i++){
            for (var j=0;j<this.array2.length;j++){
                if (this.array1[i]===this.array2[j]){
                    return false;
                }
            }
        }
        return true;
            
    }
}
console.log(obj.checkForDisjoint())