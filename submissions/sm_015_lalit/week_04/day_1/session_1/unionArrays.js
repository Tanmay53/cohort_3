function unionarrObj(arr1,arr2){
    len1=arr1.length;
    len2=arr2.length;
    obj={}
    for (i=0;i<len1 || i<len2;i++){
        if (i<len1){
            obj[arr1[i]]=arr1[i]
        }
        if (i<len2){
            obj[arr2[i]]=arr2[i]
        }
    }
    return Object.keys(obj)
}
 console.log(unionarrObj([3,5,4,7,8,5,4],[6,5,4,8,2,1,5,5]))