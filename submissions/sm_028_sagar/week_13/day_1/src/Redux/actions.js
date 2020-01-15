
export const Check_Login = 'Check_Login'

export const checkLogin = (loginData) =>{
    console.log('action')
    return {
        type:Check_Login,
        loginData
    }
}

export const Submit_Data = 'Submit_Data'

export const submitData = (data) =>{
    return {
        type:Submit_Data,
        data
    }
}

export const Update_User = 'Update_User'

export const updateUser = (id) =>{
    return {
        type:Update_User,
        id
    }
}

export const Save_Update = 'Save_Update'
export const saveUpdatedUser = data =>{
    return {
        type:Save_Update,
        data
    }
}

export const Sort_Cibil = 'Sort_Cibil'
export const sortCibil = (value) => {
    return{
        type:Sort_Cibil,
        value
    }
}

export const Sort_Loan = 'Sort_Loan'
export const sortLoan = (value) =>{
    return {
        type:Sort_Loan,
        value
    }
}

export const Filter_Loan = 'Filter_Loan'
export const filterLoanType = (value) =>{
    return {
        type:Filter_Loan,
        value
    }
}

export const Logout = 'Logout'
export const isLogOut = () => {
    return {
        type:Logout
    }
}