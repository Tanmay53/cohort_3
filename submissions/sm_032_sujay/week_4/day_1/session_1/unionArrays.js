bnm=['telecom','civil','mech','elec']
bms=['Computer Science', "civil"]

function union(a,b)
{
    branch={}
    masai=[]
    
        for(i=0;i<a.length;i++)
        {
            branch[a[i]]=a[i]
        }
        for(j=0;j<b.length;j++)
        {
            branch[b[j]]=b[j]
        }
        // console.log(branch)
        console.log(Object.values(branch))

    
   
}union(bnm,bms)