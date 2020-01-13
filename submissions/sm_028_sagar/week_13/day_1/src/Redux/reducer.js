import { Check_Login, Submit_Data, Update_User, Save_Update, Sort_Cibil,Sort_Loan, Filter_Loan } from "./actions"


const initialObj = {
    //regarding login form
    validUsername:'admin',
    validPassword:'admin',
    helperText:null,
    isLoggedIn:false,
    //User Data
    data:[],
    updateUserData:{}
}


const reducer = (state = initialObj, action) =>{
    console.log(initialObj)
    switch(action.type){
        case Check_Login:
                console.log(action.loginData)
             if(action.loginData.username === state.validUsername && action.loginData.password === state.validPassword){
                console.log('success')
                return {
                     ...state,
                     isLoggedIn:true,
                 }
             }else{
                 return {
                     ...state,
                     helperText:'Please fill valid credentials'
                 }
             }
        case Submit_Data:
               return {
                   ...state,
                   data:[...state.data,action.data]
               }
        case Update_User:
               let findUser = state.data.find(item => item.id === action.id)
               return {
                   ...state,
                   updateUserData: findUser
               }
        case Save_Update:
                    //saving updated user
                    // let arr = state.data.filter(item => item.id !== action.data.id)
                    let arr = state.data
                    for(let i = 0; i < arr.length; i++){
                        if(arr[i].id === action.data.id){
                            arr[i] = action.data
                        }
                    }  
                    return {
                        ...state,
                        data: [...arr]
                    }     
        case Sort_Cibil:
                    let sortArr = state.data
                    if(action.value === 'asc')
                        sortArr.sort((a,b) => Number(a.cibil_score) - Number(b.cibil_score))
                    else if(action.value === 'desc')
                        sortArr.sort((a,b) => Number(b.cibil_score) - Number(a.cibil_score)) 
                    return {
                        ...state,
                        data:[...sortArr]
                    }
        case Sort_Loan:
                    let sortLoanArr = state.data
                    if(action.value === 'asc')
                        sortLoanArr.sort((a,b) => Number(a.loan) - Number(b.loan))
                    else if(action.value === 'desc')
                        sortLoanArr.sort((a,b) => Number(b.loan) - Number(a.loan)) 
                    return {
                        ...state,
                        data:[...sortLoanArr]
                    }    
        case Filter_Loan:
                    let filterArr = state.data
                     filterArr = filterArr.filter(item => item.type === action.value)
                    return {
                        ...state,
                        data:[...filterArr]
                    }
        default:
                    return state
    }
}

export default reducer