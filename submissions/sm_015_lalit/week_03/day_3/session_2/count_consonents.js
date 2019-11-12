input="lalit"
count=0
for (i=0;i<input.length;i++){
    if (input[i]!=="a" && input[i]!=="e" && input[i]!=="i" && input[i]!=="o" && input[i]!=="u" && input[i]!=="A" && input[i]!=="E" && input[i]!=="I" && input[i]!=="O" && input[i]!=="U"){
        count=count+1
    }
}
console.log("Number of consonents =",count)

// a more efficient way to approach this problem
// input="lalit"
// count=0
// for (i=0;i<input.length;i++){
//     if (input[i]=="a" ||input[i]=="e" ||input[i]=="i" ||input[i]=="o" ||input[i]=="u" ||input[i]=="A" ||input[i]=="E" ||input[i]=="I" ||input[i]=="O" ||input[i]=="U"){
//         count=count+1
//     }
// }
// console.log("Number of consonents =",(input.length)-(count))