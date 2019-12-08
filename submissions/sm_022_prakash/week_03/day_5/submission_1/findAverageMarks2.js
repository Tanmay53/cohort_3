var studentProfile = {
    name: 'student1',
    marks: [45, 46, 47, 48, 49],
    //function to find the average inside an object
    average: function () {
        len = this.marks.length;
        sum = 0;
        for (i = 0; i < len; i++) {
            sum += this.marks[i]
        }
        console.log(average = sum / len)
    }


}
studentProfile.average()
