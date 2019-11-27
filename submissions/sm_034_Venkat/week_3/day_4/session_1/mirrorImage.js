function str(string) {
    var string= string || 'AyzB';
    var str1= string.slice(2,3).toUpperCase();
    var str2=string.slice(3).toLowerCase();
    var str3=string.slice(0,1).toLowerCase();
    var str4=string.slice(1,2).toUpperCase();
console.log(str1+str2+str3+str4)
}
str('MjeU')