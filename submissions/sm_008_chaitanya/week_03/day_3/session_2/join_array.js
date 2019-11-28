function join_array(arr,char){
var str='';
var joint='';
for(var i=0;i<arr.length;i++){
    joint=char.concat(arr[i])
    str=str+joint;
}
console.log(str)
}
join_array(['banana','mango','apple'],' A')