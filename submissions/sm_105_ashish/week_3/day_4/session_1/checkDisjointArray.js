function checkDisjoint(input1,input2){
    var count=0;

for(var i=0; i<input1.length;i++)
{
    for(var j=0; j<input2.length;j++)
    {
        if(input1[i]==input2[j])
        {
            count=count+1
        }
    }
}
if(count==0)
{
    console.log('Arrars are Disjoint')
}
else{
    console.log('Arrays are not Disjoint')
}
   
}
checkDisjoint([1,2,3],[4,5,6,2])