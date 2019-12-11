var union={
    first:[1,2,3,4],
    second:[3,4,7,8],
    unionArr:function(){
        var unionArray=[];
        unionArray=this.first;
        
        for (var j=0;j<this.second.length;j++){
            if (unionArray.indexOf(this.second[j])===-1){
                unionArray.push(this.second[j]);
            }
        }
        return unionArray;
    }
}
console.log(union.unionArr())