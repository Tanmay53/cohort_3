function showGrade(x) {
    for(i= 0; i< x.length; i++)
        {
            if(x[i].marks >= 90) {
                x[i].grade= 'A'
            }
            else if(x[i].marks >= 80) {
                x[i].grade= 'B'
            }
            else if(x[i].marks >= 60) {
                x[i].grade= 'C'
            }
            else if(x[i].marks >= 40) {
                x[i].grade= 'D'
            }
            else {
                x[i].grade= 'F'
            }
        }
        console.log(x)
}
showGrade([ {name:'Albert', marks:79},{name:'Pogo', marks:81},{name:'raju', marks:94}])