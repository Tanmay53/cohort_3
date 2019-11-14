var students = [ {name:'Max', marks:92} , {name:'Micheal', marks:88} , {name:'Major', marks:77} ]

function grade(x){
    l=x.length
    obj=[{}]
    for(i=0;i<l;i++){
        obj[i]=x[i]
        if(obj[i].marks>90){
            obj[i].grade='A'
        }
        if( (90>=obj[i].marks) && (obj[i].marks>80) ){
            obj[i].grade='B'
        }
        if( (80>=obj[i].marks) && (obj[i].marks>60) ){
            obj[i].grade='C'
        }
        if( (60>=obj[i].marks) && (obj[i].marks>40) ){
            obj[i].grade='D'
        }
        if(40>=obj[i].marks){
            obj[i].grade='F'
        }
    }

    return obj;
}

console.log(grade(students))