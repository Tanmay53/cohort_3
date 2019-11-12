function join_array(array,ch){
    var str=''
    for(i=0;i<array.length;i++){
        if(i!=array.length-1){
            str=str+array[i]
            str=str+ch
        }
        else{
            str=str+array[i]
        }
        
    }
    console.log(str)
}

join_array(['abcs','yyyy','iiiii','qq'],'-')