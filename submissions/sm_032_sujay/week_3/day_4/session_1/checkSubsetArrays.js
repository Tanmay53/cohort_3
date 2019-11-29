shows = ['money heist','friends','suits','the originals','big bang theory','little things','sacred games']
netflixShows =['sacred games','money heist','little things']


function checkSubset(a,b)
{
    for(j=0;j<a.length;j++)
    count = a.length
    {
        for(i=0;i<b.length;i++)
        {
            if(a[j]== b[i])
            {
                count--
            }
            
        }
    }
    if (count == 0  )
    {
        console.log('It is a subset')
    } 
    else{
        console.log('It is not a subset ')
    }
}
 checkSubset(shows,netflixShows)