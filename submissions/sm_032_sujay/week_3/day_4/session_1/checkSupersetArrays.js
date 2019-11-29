brands = ['adidas', 'nike','reebok', 'puma','jockey','levis','apple','giordano']
favBrands = ['nike','levis','giordano']
count=0
function checkSuperset( brands, favBrands)
{
     for(i=0;i<brands.length;i++)
     {
         for(j=0; j<favBrands.length;j++)
         {
         
            if(favBrands[j]==brands[i])
                {
                    count++
                }
         }
     }

     //console.log(count)
     if (count == favBrands.length-1)
     {
         console.log('It is a super set')

     } 
     else{
         console.log('It is not a superset')
     }
    
} checkSuperset( brands, favBrands)