var subset={
    firstArray:[1,2,9],
    secondArray:[1,2,3,4],
    subsetCheck:function(){
        for (var i=0;i<this.firstArray.length;i++){
                if (this.secondArray.indexOf(this.firstArray[i])===-1){
                    return false;
                }
        }
        return true;
    }
}

console.log(subset.subsetCheck())