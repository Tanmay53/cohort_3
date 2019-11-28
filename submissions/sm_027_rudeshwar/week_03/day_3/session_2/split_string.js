var name="Masaischoolisamazing"
var splitchar="s"
var i=0
var arr1=[]
var arr2=[] 
for(i=0;i<=name.length-1;i++)
{
  
  if(name[i]=="s")
  {
    console.log('')
  }
  else{
    arr2=arr1+name[i] 
    console.log(arr2)
  }
}
console.log(typeof(arr2))//string
