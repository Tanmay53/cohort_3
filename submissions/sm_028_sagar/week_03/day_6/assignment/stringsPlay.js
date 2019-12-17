
inp = 'sagar  kadu'
// console.log(removeSpace(inp))
console.log(hypenCase(inp))

function removeSpace(inp){
    let str = ''
    let arr = []
    for(let i = 0; i < inp.length; i++){
        if(inp[i] === ' '){
            arr.push(str)
            str = ''
            continue
        }else{
            str+=inp[i]
        }
    }
    arr.push(str)
    return arr
}


//camelCase
function camelCase(input){
    let arr = removeSpace(input)
    let cnt = 0
    let str = ''
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === ' ' || arr[i] === ''){
            continue
        }else{
            cnt++
            if(cnt == 1){
                str+=arr[i].toLowerCase()
            }
            else{
                str+=arr[i].charAt(0).toUpperCase()+arr[i].slice(1)
            }
        }
    }
    return str
}


function snakeCase(input){
    let arr = removeSpace(input)
    let cnt = 0
    let str = ''
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === ' ' || arr[i] === ''){
            continue
        }else{
            cnt++
            if(cnt === 1){
                str+=arr[i]
            }else{
                str+='_'+arr[i].toLowerCase()
            }
        }
    }
    return str
}


function hypenCase(input){
    let arr = removeSpace(input)
    let cnt = 0
    let str = ''
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === ' ' || arr[i] === ''){
            continue
        }else{
            cnt++
            if(cnt === 1){
                str+=arr[i]
            }else{
                str+='-'+arr[i].toLowerCase()
            }
        }
    }
    return str
}