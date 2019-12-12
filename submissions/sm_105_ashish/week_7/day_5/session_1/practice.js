// var student={
//     name:'Ashish',
//     id:1,
//     city:'patna',
//     hobbies:'cricket'
// }

// function updateStudent(obj,prop,value){
//    obj[prop]=value
// return obj
// }

// updateStudent(student,'id',5)
// console.log(student)
var arr=['a','a','a','a','b','b','b','d','d','e']
var obj={}
var n=[]
var count=0
for(var i=0;i<arr.length;i++){
    count++
    obj[arr[i]]=count
}
for(key in  obj){
    n.push([key,obj[key]])
}
//var str=n[0][0]+n[0][1]
for(var i=n.length-1;i>=1;i--){
   n[i][1]=n[i][1]-n[i-1][1]
}
for(var i=0;i<n.length;i++){
    n[i]=n[i].join()
}
n=n.join()
n = n.replace (/,/g, "")

var arr=[4,5,6,7,8,6,4,8,9]
var min=Math.max(4,5,6,7,8,9,12,4,0,3,6)
console.log(min)
