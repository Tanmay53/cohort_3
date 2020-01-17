import { AUTH, ADD_USER, DELETE_USER, SORT_USER } from './type'

const intialState = {
    username: 'admin',
    password: 'admin',
    isAuth : false,
    userList : [
    //     {
    //     firstName : 'Sudhir',
    //     age : '23',
    //     email : "lion.sud.k@gamil.com",
    //     cibilScore : "342243",
    //     loanAmount : "23321",
    //     loanType : "Personal",
    //   },
    //   {
    //     firstName : 'Sudhir Singh',
    //     age : '23',
    //     email : "lion.sud.k@gamil.com",
    //     cibilScore : "342243",
    //     loanAmount : "23321",
    //     loanType : "Personal",
    //   }
    ]
}

const loginReducer = (state = intialState, action) => {
    // console.log(action.payload)
    switch (action.type) {
        case AUTH : 
            if(state.username === action.payload.username && state.password === action.payload.password){
                return {
                    ...state, 
                    isAuth: true
                }
            }
        case ADD_USER : 
            return {
                ...state,
                userList : [...state.userList, action.payload]

            }
        case DELETE_USER : 
            // console.log(action.payload.firstName)
            return {
                ...state,
                userList : state.userList.filter((item) => action.payload.firstName != item.firstName )
            }
        case SORT_USER : 
            return {
                ...state,
                userList : state.userList.sort((a,b) => (a.firstName > b.firstName) ? 1 : -1)
            }
        default : return state
    }
}

export default loginReducer;
