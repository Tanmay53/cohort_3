games=['chess','tennis','carrom','cricket','foosball']
boardGames=['chess','carrom','foosball','snake n ladder']
arrRes=[]
arrRes1=[]

function arraySymmetricDifference(a,b)
{
  
  for(i=0;i<a.length;i++)
  {
    for(j=0;j<b.length;j++)
    {
      if(a[i]==b[j])
      {
        arrRes1.push(a[i])
      }
      
    }
  }
// arrRes1 has a intersection b
  for(k=0;k<a.length;k++)
  {
    x=0;
    for(l=0;l<arrRes1.length;l++)
    {
      if(a[k]!=arrRes1[l])
      {
        x=x+0;
      }
      else{
        x++
      }
      
    }
    if(x==0)
    {
      arrRes.push(a[k])
    }
  }

  for(m=0;m<b.length;m++)
  {
    z=0;
    for(n=0;n<arrRes1.length;n++)
    {
      if(b[m]!=arrRes1[n])
      {
        z=z+0;
      }
      else{
        z++
      }
      
    }
    if(z==0)
    {
      arrRes.push(b[m])
    }
  }
//arrRes = (A-arrRes1) + (B-arrRes1) 
  
  //console.log(arrRes1)
  console.log(arrRes)

}
arraySymmetricDifference(games,boardGames)