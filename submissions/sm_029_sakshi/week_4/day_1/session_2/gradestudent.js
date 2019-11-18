var student = [
    {Name : "Sakshi", marks: 85},
    {Name : "Sonia", marks: 75},
    {Name : "Shruti", marks: 35}
  ];
  function stulist(list)
  {
    newarr=list.map(function(obj)
         {
      if(obj.marks >= 90)
        {
     obj.grade = 'A'
        }
     else if(obj.marks >= 80 && obj.marks < 90)
     {
       obj.grade = 'B'
     }
     else if(obj.marks >= 60 && obj.marks < 80)
     {
       obj.grade = 'C'
     }
     else if(obj.marks >=60 && obj.marks < 60)
     {
       obj.grade = 'D'
     }
      else
      {
        obj.grade = 'F'
      }
     return obj
    })
    return newarr
  }
  console.log(stulist(student))