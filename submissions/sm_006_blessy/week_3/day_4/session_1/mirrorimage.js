   function mirrorimage(str)
    {
//var str = "AyzB"
   var caps ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var small ="abcdefghijklmnopqrstuvwxyz"
    var newstr = ""
    for(var i=0; i<str.length; i++)
    {
        for(var j=0; j<small.length; j++)
             {
         if(str[i]==caps[j])
         {
          newstr = newstr+small[25-j]
           }
    
      else if(str[i]==small[j])
          {
          newstr =newstr+ caps[25-j]
          } 
        
         }
    }
    console.log(newstr)
    }
    mirrorimage('ABCytr')