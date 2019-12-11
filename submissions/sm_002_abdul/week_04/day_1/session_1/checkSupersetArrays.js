var superset={
    firstArray:[1,2,3,4],
    secondArray:[1,2,4,9],
    supersetcheck: function (){
        for (var i=0;i<this.secondArray.length;i++){
            
            if(this.firstArray.indexOf(this.secondArray[i])===-1){
                return false;
            } 

        }
        return true;
    }
}

console.log(superset.supersetcheck())