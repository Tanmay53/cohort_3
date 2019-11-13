var arr=[1,2,3,1,'a','g','a',5,7,7,'z','a']

function removeDuplicate(x){
    var obj={ };
        for(i=0;i<x.length;i++){
            obj[x[i]]=1
        }
        return Object.keys(obj);
}

console.log(removeDuplicate(arr))