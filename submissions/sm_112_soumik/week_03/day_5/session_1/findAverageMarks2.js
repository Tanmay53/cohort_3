//Object Person
var person ={
    name: "David",
    marks:[50,30,100,90,40],
}
   
//Calling the function
//Tried with [100,200,300,300] and [50,30,100,90,40]
function avg_marks(input){
    var store=[]
    var char=person.marks.length
    for(i=0;i<char;i++){
        store =parseInt(person.marks[i]+ store)
    } 
    console.log("The avg marks of "+person.name+ " "+"is"+" "+store/char)
}
avg_marks(person.marks)