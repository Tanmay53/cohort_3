function findCountDuplicate(arr,studentName)
{
    for(key in arr)
    {
        if(key != "students")
        {
            return false;
        }
        else
        {
            var count=0
            for(i=0;i<arr.students.length;i++)
            {
                    if(arr.students[i]== studentName)
                    count++ 
            }
            return count
        }
    }
}

module.exports = findCountDuplicate