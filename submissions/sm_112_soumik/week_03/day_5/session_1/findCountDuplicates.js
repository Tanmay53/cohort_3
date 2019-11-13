//Object-person
var person = {
name : "Bhavesh",
books: ['math','science','history','math'],
search:['science']
}
//Count Duplicates func
function cntDup(input,search){
    var count =0
    for(i=0;i<input.length;i++){
        if(input[i] ==search){
            count+=1
        }
    }
    console.log(count)
}
//calling the function
cntDup(person.books,person.search)