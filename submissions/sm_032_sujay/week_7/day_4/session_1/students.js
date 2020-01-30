var marks=[] // declare global variable to access outside function


class Student
{
    constructor(name="invalid",email="invalid",phone="invalid")
    {
        console.log("in constructor")
        this.name=name
        this.email= email
        this.phone = phone

    }


    assignMarks(hackerrank,coding,softskills)
    {
        console.log("scores")
        this.hackerrank= hackerrank
        this.coding = coding
        this.softskills = softskills
    }

   

    highestMarks()
    {
        console.log("And the Highest Marks is..")
        marks.sort((a,b) => a>b ? a : b)
        return marks[0]
    }

    totalSubjects()
    {

        console.log("No. of Subjects of Masai School")
        return marks.length
    }

    showMarks()
    {
       console.log("Marks Card")
        marks.push(this.hackerrank)
        marks.push(this.coding)
        marks.push(this.softskills)
       return marks
    }

    average()
    {   
        console.log("Average")
       return marks.reduce((a,b) => a+b)/marks.length
        
    }

    low()
    {
        console.log("get LOW")
       marks.sort((a,b) => a<b ? a : b)
       return marks[0]
       
    }

}

var sm032 = new Student('sujay','sujay@masai.com','8000980009')
sm032.assignMarks(80,85,90)
console.log(sm032.showMarks())
console.log(sm032.totalSubjects())
console.log(sm032.highestMarks())
console.log(sm032.average())
console.log(sm032.low())




