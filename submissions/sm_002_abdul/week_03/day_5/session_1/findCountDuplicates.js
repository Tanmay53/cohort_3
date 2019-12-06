var obj={
    arr:[1,2,3,1,1,2,2,2,3],
    num:2,
    count:function(){
        var count=0;
        for (var i=0;i<this.arr.length;i++){
            if (this.arr[i]===this.num){
                count++
            }
        }
        return count;
    }
}

console.log(obj.count())