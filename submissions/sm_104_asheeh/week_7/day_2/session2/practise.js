// const arr = ['MASAI','INDIA','EDTECH']
// var [name,location,desc] = arr
// console.log(name,location,desc)
// name = 'albert sebastian'
// const [fname, lname] = name.split(' ')
// console.log(fname, lname)

// const person = {
//     f:'albert',
//     l:'sebastian',
//     i:'albseb511'
// }

// var {f:fname,l:lname,i:id} = person
// console.log(fname);

function Person(name, email, username){
    this.name = name,
    this.email = email,
    this.username = username
};
var ashish = new Person("Ashish", "dshish@gmail.com", "ashish123");
var sudhir = new Person("Sudhir", "audhir@gmail.com", "sud123");
var rahul = new Person("rahul", "rahul@gmail.com", "rah123");
var userArr = [];


userArr.push(ashish);
userArr.push(sudhir);
userArr.push(rahul);

    
userArr.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    else if (nameA > nameB) {
      return 1;
    }
    else if(nameA === nameB)
  
    // names must be equal
    return 0;
  });


console.log((userArr));

// var items = ['réservé', 'Premier', 'Cliché', 'communiqué', 'café', 'Adieu'];
//  items.sort((a, b) => a.localeCompare(b, 'fr', {ignorePunctuation: true}));
// console.log(items);