// function destroyer(arr)
// {
//     return arr.filter(function(x)
//     {
//         console.log(!Object.values(arr).slice(1).find(function(y){
//             y === x
//         }))
//     })
// }
// console.log(destroyer([1,2,2,1,4,3],2,3));

let arr = [{name:"Rahul"},{name:"Sudhir"},{name:"Suyash"},{name:"Amit"}]
arr.forEach(ele=>{
    if(ele.name.toLowerCase().includes("su"))
    {
        console.log(ele);
    }
    
})
