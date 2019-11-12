function gradeStudent(list) {

    var new_list =  list.map(function(obj){
                    if(obj.marks >= 90)
                        obj.grade = 'A'
                    else if(obj.marks >= 80 && obj.marks < 90)
                        obj.grade = 'B'
                    else if(obj.marks >= 60 && obj.marks < 80)
                        obj.grade = 'C'
                    else if(obj.marks >=60 && obj.marks < 60)
                        obj.grade = 'D'
                    else
                        obj.grade = 'F'

                    return obj
                })

                
    return new_list
}

var students = [ {name:'Albert', marks:70},
                 {name:'Pogo', marks:60}]

console.log(gradeStudent(students))                 