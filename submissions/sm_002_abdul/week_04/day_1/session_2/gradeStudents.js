var students=[
    {name:'ironMan',marks:98},
    {name:'thor',marks:88},
    {name:'spiderMan',marks:73},
    {name:'loki',marks:58},
    {name:'hackeye',marks:37}
]

var updatedList=students.map(function(value){
    if (value.marks>90){
        value.grade='A';
        return value;
    }
    if (value.marks>80 && value.marks<90){
        value.grade='B';
        return value;
    }
    if (value.marks>60 && value.marks<80){
        value.grade='C';
        return value;
    }
    if (value.marks>40 && value.marks<60){
        value.grade='D';
        return value;
    }
    if (value.marks<40){
        value.grade='F';
        return value;
    }
})

console.log(updatedList)