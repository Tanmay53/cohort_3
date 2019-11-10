var student = {
    name:'name',
    marks: [50,30,100,80]
    average: function(){
      var marks = 0;

      for(i = 0; i < this.marks.length; i++) {
        marks += this.marks[i];
      }

      return marks;
    }

}

function avgMarks(obj) {
  return obj.average()
}

console.log(avgMarks(student))