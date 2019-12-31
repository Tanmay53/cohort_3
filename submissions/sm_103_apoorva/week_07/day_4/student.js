class Student
{
    constructor(name = "Invalid", email = "Invalid", phone = "Invalid")
    {
        this.name = name
        this.email = email
        this.phone = phone
    }
    
    assignMarks(maths, english, science, history, geography)
    {
        this.maths = maths
        this.english = english
        this.science = science
        this.history = history
        this.geography = geography
    }

    highestMarks()
    {
        let arr = [this.maths,
            this.english,
            this.science,
            this.history,
            this.geography]
            let max = Math.max(...arr)
        return max
    }

    totalSubjects()
    {
        let arr = [this.maths,
            this.english,
            this.science,
            this.history,
            this.geography]
            let totalSubjects = arr.length
        return totalSubjects
    }

    showMarks()
    {
        let arr = [this.maths,
            this.english,
            this.science,
            this.history,
            this.geography]
        return arr
    }

    average()
    {
        let arr = [this.maths,
            this.english,
            this.science,
            this.history,
            this.geography]
            var avg = arr.reduce((a,b)=>a+b)/arr.length
        return avg
    }

    low()
    {
        let arr = [this.maths,
            this.english,
            this.science,
            this.history,
            this.geography]
            let min = Math.min(...arr)
        return min
    }
}

var student = new Student("Apoorva Krishna","apoorv15997@gmail.com","7691091297")
console.log(student.phone)
student.assignMarks(85,98,76,82,94)
console.log(student.average())
