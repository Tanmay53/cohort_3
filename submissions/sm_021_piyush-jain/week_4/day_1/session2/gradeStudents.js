var students = [ {name:'Albert', marks:70},
{name:'Pogo', marks:60}]
//running through array of objects
for(var i=0;i<students.length;i++)
{
     grade(students[i])
}
//function to update grade for their marks
function grade(obj)
{
   if(obj.marks>90)
   obj["grade"]="A"
   else if(obj.marks<90 && obj.marks>80)
   obj["grade"]="B"
   else if(obj.marks<80 && obj.marks>60)
   obj["grade"]="C"
   else if(obj.marks<60 && obj.marks>40)
   obj["grade"]="D"
   else 
   obj["grade"]="F"


}
console.log(students)