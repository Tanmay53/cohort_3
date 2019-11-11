function mirrorImage(str)
{
 var   arr1 = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm'] 
 var   arr2 = ['Z', 'z', 'Y', 'y', 'X', 'x', 'W', 'w', 'V', 'v', 'U', 'u', 'T', 't', 'S', 's', 'R', 'r', 'Q', 'q', 'P', 'p', 'O', 'o', 'N', 'n']
 var   a=''
 for(var i=0 ; i<str.length ; i++)
  {
      for(var j=0 ; j<arr1.length ; j++)
      {
          if(str.charAt(i) == arr1[j])
          {
              a = a + arr2[j]
          }
          else if(str.charAt(i) == arr2[j])
          {
              a = a + arr1[j]
          }
      }
  }
  console.log('The mirror image is:', a)
  return a
}

mirrorImage('AyzB')
