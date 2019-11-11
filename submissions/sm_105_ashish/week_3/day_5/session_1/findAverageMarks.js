function avgMarks({name,marks})
 {
    var input={
        name,
        marks}
        var sum=0
            var avg=0
            for(var i=0;i<input.marks.length;i++)
            {
               sum=sum+input.marks[i]
            }
            avg=sum/input.marks.length  
            console.log('Average score of given students is: '+avg)
}
avgMarks({name:['a','b','c','d'],marks:[20,30,40,70]})