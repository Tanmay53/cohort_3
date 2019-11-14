// let id = '45';
// let name = 'suyash'

// if (id == 45) {  //with 2 equals
//   console.log('This id is valid');
// } else {
//   console.log('Not valid');
// }

// if (id === 45) {  //with 3 equals
//   console.log('This id is valid');
// } else {
//   console.log('Not valid');
// }

/*SWITCH CASES */

let day;
// console.log(new Date)
switch (new Date().getDay()) {
  case 0:
    day = 'sunday';
    break;
  case 2:
    day = 'monday';
    break;
  case 3:
    day = 'tuesday';
    break;
  case 4:
    day = 'wednesday';
    break;
  case 5:
    day = 'thursday';
    break;
  case 6:
    day = 'friday';
    break;
  case 7:
    day = 'saturday';
    break;
}

console.log(day)