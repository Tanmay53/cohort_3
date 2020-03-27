import { SEND_TOKEN, ADD_EMPLOYEE, DELETE_EMPLOYEE, CHANGE_PAGE } from './action'

const initialState = {
    page: 1,
    perPage: 20,
    loginData: { token: '', error: true },
    departmentData: ["Electrical", "Computer", "Mechanical", "Electronics", "Civil", "Aeronautical"],
    employeeData: [
        { "name": "Prabhat", "gender": "Male", "department": "Computer", "salary": 450000 },
        { "name": "Dipanshu", "gender": "Male", "department": "Electronics", "salary": 350000 },
        { "name": "Gaurav", "gender": "Male", "department": "Civil", "salary": 150000 },
        { "name": "Ritu", "gender": "Female", "department": "Computer", "salary": 250000 },
        { "name": "Madhu", "gender": "Female", "department": "Electrical", "salary": 100000 },
        { "name": "Albert", "gender": "Male", "department": "Computer", "salary": 450000 },
        { "name": "Sandy", "gender": "Male", "department": "Electronics", "salary": 350000 },
        { "name": "Lalit", "gender": "Male", "department": "Civil", "salary": 150000 },
        { "name": "Sonam", "gender": "Female", "department": "Mechanical", "salary": 450000 },
        { "name": "Raghu", "gender": "Male", "department": "Aeronautical", "salary": 350000 },
        { "name": "Mamta", "gender": "Female", "department": "Mechanical", "salary": 150000 },
        { "name": "Sima", "gender": "Female", "department": "Computer", "salary": 250000 },
        { "name": "Madhu", "gender": "Female", "department": "Electrical", "salary": 100000 },
        { "name": "Sandhya", "gender": "Female", "department": "Computer", "salary": 450000 },
        { "name": "Sandy", "gender": "Male", "department": "Electronics", "salary": 350000 },
        { "name": "Radha", "gender": "Female", "department": "Mechanical", "salary": 150000 },
        { "name": "Prabhat", "gender": "Male", "department": "Aeronautical", "salary": 450000 },
        { "name": "Rani", "gender": "Female", "department": "Electronics", "salary": 350000 },
        { "name": "Tina", "gender": "Female", "department": "Civil", "salary": 150000 },
        { "name": "Ritu", "gender": "Female", "department": "Computer", "salary": 250000 },
        { "name": "Madhu", "gender": "Female", "department": "Electrical", "salary": 100000 },
        { "name": "Albert", "gender": "Male", "department": "Computer", "salary": 450000 },
        { "name": "Sandy", "gender": "Male", "department": "Electronics", "salary": 350000 },
        { "name": "Lalit", "gender": "Male", "department": "Civil", "salary": 150000 }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_TOKEN:
            if (action.payload.error === false) {
                return {
                    ...state,
                    loginData: action.payload
                }
            }
            break;

        case ADD_EMPLOYEE:
            return {
                ...state,
                employeeData: [...state.employeeData, action.payload]
            };

        case DELETE_EMPLOYEE:
            return {
                ...state,
                employeeData: state.employeeData.filter((item, index) => index != action.payload)
            };

        case CHANGE_PAGE:
            return {
                ...state,
                page: action.payload
            }

        default:
            return state;
    }
}

export default reducer;