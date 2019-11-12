var person ={
    name : "random",
    marks1:[10,50,70,80,90],
    marks2:[50,50,60,90,20]
}

        person.marks1.maps(function(element){
        person.marks2.forEach(function(item){
            if(element == item){
                return false
            }
            else
                return true
            })
        })
        console.log(x)