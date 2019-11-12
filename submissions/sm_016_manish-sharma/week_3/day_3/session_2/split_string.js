function split(string,ch){
    var arr=[]
    var str=''
    for(i=0;i<string.length;i++){
        if(string[i]!=ch){
            str= str+string[i]
            if (i==string.length-1){
                arr.push(str)
            }
        }
        else{
            arr.push(str)
            str=''
        }
    
    }console.log(arr)
}

split('abcd-efg-ha-y','-')