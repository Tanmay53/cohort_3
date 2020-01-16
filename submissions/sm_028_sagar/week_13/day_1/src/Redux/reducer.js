import { Check_Login, Submit_Data, Update_User, Save_Update, Sort_Cibil,Sort_Loan, Filter_Loan, Logout } from "./actions"


const initialObj = {
    //regarding login form
    validUsername:'admin',
    validPassword:'admin',
    helperText:null,
    isLoggedIn:false,
    //User Data
    data:[],
    updateUserData:{},
    filteredData:[],
    viewTableData:[]
}


const reducer = (state = initialObj, action) =>{
    console.log('filter ',state.filteredData,'data ',state.data )
    switch(action.type){
        case Check_Login:
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
                   data:[...state.data,action.data],
                   viewTableData:[...state.data,action.data]
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
                        data: [...arr],
                        viewTableData:[...arr]
                    }     
        case Sort_Cibil:
                    let sortArr = state.data
                    if(action.value === 'asc')
                        sortArr.sort((a,b) => Number(a.cibil_score) - Number(b.cibil_score))
                    else if(action.value === 'desc')
                        sortArr.sort((a,b) => Number(b.cibil_score) - Number(a.cibil_score)) 
                    return {
                        ...state,
                        viewTableData:[...sortArr]
                    }
        case Sort_Loan:
                    let sortLoanArr = state.data
                    if(action.value === 'asc')
                        sortLoanArr.sort((a,b) => Number(a.loan) - Number(b.loan))
                    else if(action.value === 'desc')
                        sortLoanArr.sort((a,b) => Number(b.loan) - Number(a.loan)) 
                    return {
                        ...state,
                        viewTableData:[...sortLoanArr]
                    }    
        case Filter_Loan:
                    if(action.value !== 'all'){
                        let filterArr = state.data.filter(item => {
                            console.log(item.type[0],action.value)
                            return item.type[0] === action.value
                        })
                        return {
                            ...state,
                            viewTableData:[...filterArr]
                        }
                    }else{
                        let data = state.data
                        return {
                            ...state,
                            viewTableData:[...data]
                        }
                    }
        case Logout:
                    return {
                        ...state,
                        isLoggedIn:false
                    }
        default:
                    return state
    }
}

export default reducer