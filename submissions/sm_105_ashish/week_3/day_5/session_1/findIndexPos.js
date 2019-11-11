   function indexPos(input1,input2)
   {
    var input1
    var input2
    var cnt=0
    for(var i=0;i<input1.length;i++)
    {
        if(input1[i]==input2)
        {
          cnt=i
          break
        }
        else
        {
            cnt=-1
        }
    }
    console.log(cnt)
}
indexPos([0,5,12,45,21,23],17)
