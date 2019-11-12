
student = {
    name : 'APS',
    marks : [50,30,100,80],
    average : function(){
        var sum = 0, avg
        for(var i=0 ; i<this.marks.length ; i++)
        {
            sum = sum + this.marks[i]
        }
            avg = sum/(this.marks.length)
            return avg
    }
};
function avgMarks(obj)
{
   return obj.average()
}
console.log('Average marks of student is :',avgMarks(student))