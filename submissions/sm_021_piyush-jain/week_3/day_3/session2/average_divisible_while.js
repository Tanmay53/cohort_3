var limit=20,num=4,average,sum=0,n=0,i=1
while(i<limit)
{
  if((i%num)==0)
  {
      sum=sum+i
      n=n+1
  }
  i++
}

average=sum/n
console.log(average)