class Student{
  constructor(name='invalid',email='invalid',phone='invalid',marks='invalid'){
    this.name=name;
    this.email=email;
    this.phone=phone;
    this.marks=[];
  }

  assignMarks(...args){
    this.marks=args;
  }

  highestMarks(){
    var highestMark=this.marks.reduce((a,b)=>Math.max(a,b));
    return highestMark;
  }

  totalSubjects(){
    var totalSubjects=this.marks.length;
    return totalSubjects;
  }

  showMarks(){
    return this.marks;
  }

  average(){
    var totalMarks=this.marks.reduce((a,b)=>a+b);
    var noOfSubjects=this.marks.length;

    var average=Math.ceil(totalMarks/noOfSubjects);

    return average;
  } 

  low(){
    var low=this.marks.reduce((a,b)=>Math.min(a,b));
    return low;
  }
}

var abdul=new Student('Abdul','abdul@masai.com',98457);

abdul.assignMarks(100,200,300,400);

console.log(abdul.low())