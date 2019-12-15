// function that will accept object and return grade and also will
// add the "grade" key to the object  //
function gradeStudents(object)
{
    if(object["totalMarks"] >= 90)
    {
        object["grade"] = "A";
        return "A";
    }
    else if(object["totalMarks"] >= 80 && object["totalMarks"] < 90)
    {
        object["grade"] = "B"
        return "B";
    }
    else if(object["totalMarks"] >= 60 && object["totalMarks"] < 80)
    {
        object["grade"] = "C";
        return "C";
    }
    else if(object["totalMarks"] >= 40 && object["totalMarks"] < 60)
    {
        object["grade"] = "D";
        return "D";
    } 
    else
    {
        object["grade"] = "F";
        return "F";
    }
}

//creating an object constructor function//
function Student(name, totalMarks)  {
    this.name = name;
    this.totalMarks = totalMarks
};
var student1 = new Student("Ashish", 60);
var student2 = new Student("Asheesh Pratap", 30);
// var student1 = {
//     name : "Ashish",
//     totalMarks : 60
// };
// var student2 = {
//     name : "Ashish Pratap",
//     totalMarks : 30
// };
// console.log("Grade of " + student1.name + " is : " + gradeStudents(student1));
// console.log(student1);
var objectArr = [student1, student2];
console.log(objectArr);


// // map through the objectArr //
// var gradeArr = objectArr.map(function(ele){
//     gradeStudents(ele);
//     return ele;
// });
// console.log(gradeArr);

// forEach through the objectArr //
objectArr.forEach(function(ele){
    gradeStudents(ele);
});
console.log(objectArr);

