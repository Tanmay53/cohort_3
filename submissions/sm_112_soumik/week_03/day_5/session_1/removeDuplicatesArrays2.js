//Creating Object Array
var person = {
    marks: [10,10,20,20,0,0],
    //Func To sort dup Marks
    sort:function(){
        var store= []
        for(i =0;i<person.marks.length -1;i++){
            for(j=i+1;j<person.marks.length;j++){
                if(person.marks[i] == person.marks[j]){
                    person.marks[j] = null
                }
            }
        }
        for(i=0;i<person.marks.length ;i++){
            if(person.marks[i] != null){
                store.push(person.marks[i])
                }
        }
    
        
        console.log(store)
    }
}
//Calling The Function
person.sort()
//Tested For values[10,20,30,50,10] and [10,10,20,20,0,0]