var students = [ {name:'Albert', marks:70},{name:'Pogo', marks:30}]


updateStudent = students.map (function (value) { //.map function

    if (value.marks >= 90)
    {
        value.garade = "A"
       return  value
    }
    else if (value.marks < 90 && value.marks >= 80)
    {
        value.grade = "B"
        return value
    } 
    else if (value.marks < 80 && value.marks >= 60)
    {
        value.grade = "C"
        return value
    }
    else if (value.marks < 60 && value.marks >= 40)
    {
        value.grade = "D"
        return value
    }
    else if (value.marks < 40)
    {
        value.grade = "F"
        return value
    }

})

console.log(updateStudent) // display output