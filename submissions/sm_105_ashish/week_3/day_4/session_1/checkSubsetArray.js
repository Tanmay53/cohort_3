function checkSubset(input1,input2){
    var count=0;
    if(input1.length<input2.length)
    {        for(var i=0; i<input1.length;i++)
                {
                    for(var j=0; j<input2.length;j++)
                          {
                            if(input1[i]==input2[j])
                                 {
                                  count=count+1
                                 }
                          }
                 }
    }
    if(count==input1.length)
    {
        console.log('Array1 is subset of Array2')
    }
    else{
        console.log('Array1 is not a subset of Array2')
    }
}
checkSubset([1,2,3,5],[0,1,2,3,4])