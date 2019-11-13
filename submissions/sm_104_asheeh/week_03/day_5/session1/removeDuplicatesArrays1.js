//function removeDuplicateArrays(arr)
//{
     var library = {
    
        name : 'Vivekanand Library',
        books : ['c', 'java', 'ds', 'compiler', 'ds', 'java']
    }; 
    var k=0,cnt=0
    console.log(library.books)
         for(var i=0 ; i<library.books.length ; i++)
         {
             for(var j=i+1 ; j<library.books.length ; j++)
             {
                 if(library.books[i] == library.books[j])
                 {
                    //cnt = cnt + 1
                    library.books[j] = null
                 }
             }
         }
         console.log(library.books)
         for(var i=0 ; i<library.books.length ; i++)
         {
             if(library.books[i] != null)
             {
                 library.books[k] = library.books[i]
                 k++
                 cnt = cnt + 1
             }
         }
         console.log(library.books)
         console.log(cnt)
     
     

//}