function calGrade(num) {
 switch(true) {
     case 0 <= num <= 40:
     return 'D';
     case num > 40 && num <= 70:
     return 'C';
     case num > 70 && num <= 90:
     return 'B';
     case num > 90 && num <= 100:
    return 'A';
 }
}
console.log(calGrade(31))