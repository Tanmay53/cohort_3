class student{
    constructor(name,email,phone){
        this.name=name || 'Invalid',
        this.email=email || 'Invalid',
        this.phone=phone || 'Invalid'
    }
    assignMarks([...args]){
        var marks =[...args]
        this.marks= marks
    }
    highestMarks(){
        var high= this.marks.reduce((a,e)=>a>e?a:e)
        return high
    }
    totalSubjects(){
        var total= this.marks.reduce((a,e)=>a=a+1,0)
        this.total=total
        return total
    }
    showMarks(){
        return this.marks
    }
    low(){
        var low= this.marks.reduce((a,e)=>a<e?a:e)
        return low
    }
    average(){
        var sum = this.marks.reduce((a,e)=>a=a+e)
        var avg= sum/(this.total)
        return avg
    }
}

var manoj = new student

manoj.assignMarks([10,11,12,13])
console.log(manoj.highestMarks())
console.log(manoj.totalSubjects())
console.log(manoj.showMarks())
console.log(manoj.low())
console.log(manoj.average())