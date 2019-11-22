//funciton which accepts an object
//Each object will contain, name and totalMarks as keys


function gradeStudents(obj) {


    if (obj["marks"] >= 90)
        obj["grade"] = "A";

    else if (obj.marks >= 80 && obj.marks < 90)
        obj["grade"] = "B";

    else if (obj.marks >= 60 && obj.marks < 80)
        obj["grade"] = "C";

    else if (obj.marks >= 40 && obj.marks < 60)
        obj["grade"] = "D";

    else
        obj["grade"] = "F";

    return obj;
}
var obj1 = {
    name: 'Albert',
    marks: 70
};
var obj2 = {
    name: 'Shivansh',
    marks: 90
};

console.log(gradeStudents(obj1));
console.log(gradeStudents(obj2));