const ADDUSERS = "ADDUSERS";
const add=(input)=>{
    console.log(input)
    return{
        type:ADDUSERS,
        payload:input
    }
}
export {add}