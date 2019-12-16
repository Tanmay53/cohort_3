function removeduplicate(arr){
        var newarr = []
        var notpresent=true
        newarr.push(arr[0])
    
        for(var i=1;i<arr.length;i++){
            for(var j=0;j<newarr.length;j++){
                if(arr[i] ==newarr[j]){
                    notpresent = false
                }
            }
            if(notpresent)
            {
                newarr.push(arr[i])  
            }
            notpresent = true
        }
        console.log(newarr)
        return newarr
    }


removeduplicate([1,1,2,2,3,4,4,5])
