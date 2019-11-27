function propertyUpdate(obj , prop ,val){
    obj[prop] = val;
    return obj;
}
var obj = {
    Name : "Prabhat",
    Age : 23,
    Place : "Kormangla",
}
console.log(propertyUpdate(obj,"Name","gaurav"))