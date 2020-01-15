let studentDb = [];
class Student{
    constructor(name="Invalid", email="Invalid", phone="Invalid"){
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.marks = []
    }

    assignMarks(history=0, geography=0, philosophy=0)
    {
        this.marks.push({
        historyScore : history,
        geographyScore : geography,
        philosophyScore : philosophy
        })
    }

    highestMarks()
    {
        let maxMarks=0;
        this.marks.forEach(function(ele) {
            for(let key in ele)
            {
                if(ele[key] > maxMarks)
                {
                    maxMarks = ele[key];
                }
            }
        });
        return maxMarks
    }

    totalSubjects()
    {
        let totalNumOfSubjects = Object.keys(this.marks[0]).length;
        return totalNumOfSubjects;
    }

    showMarks()
    {
        return Object.values(this.marks[0]);
    }

    average()
    {
        let averageMarks = 0;
        for(let i=0; i<this.showMarks().length; i++)
        {
            averageMarks += this.showMarks()[i]
        }
        return averageMarks;
    }

    low()
    {
        let marksArr = Object.values(this.marks[0])
        let minMarks = marksArr[0];
        // console.log(marksArr);
        for(let i=0; i<marksArr.length; i++)
        {
            if(marksArr[i] < minMarks)
            {
                minMarks = marksArr[i];
            }
        }
        return minMarks;
    }
}

let student1 = new Student("Ashish","aps@gmail.com", "59873295729",)

student1.assignMarks(100,50,20)
// student1.highestMarks()
// console.log(student1.highestMarks());
// console.log(student1);
// console.log(student1.totalSubjects())
// console.log(student1.showMarks());
// console.log(student1.average());
console.log(student1.low());
