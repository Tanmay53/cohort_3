function join_arrays(array_given,character_given){
    var str1=''
    for (i=0;i<array_given.length;i++){
        str1=str1+array_given[i]+character_given
    }
    console.log(str1)
}

join_arrays(['be','the','communication'],'/')