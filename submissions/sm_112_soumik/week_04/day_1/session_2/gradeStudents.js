person = [
    { name: "Soumik",marks:72},
    {name:"Sudh" ,marks:83},
    {name:"Zoya",marks:95},
    {name:"Debo",marks:44},
    {name:"Gargi",marks:33},
    {name:"Samrat",marks:60}
]
var grade 
var x = person.map(function(element){
   if(element.marks > 90)
       return "A"
    else if(element.marks >= 80 && element.marks <= 90)
        return "B"
    else if(element.marks >= 60 && element.marks < 80)
        return person.grade ="C"
    else if(element.marks >= 40 && element.marks < 60)
        return person.grade ="D"
    else if(element.marks < 40)
        return person.grade ="F"
})

person.forEach(function(element,index){
    element.grades = x[index]
})
console.log(person)
