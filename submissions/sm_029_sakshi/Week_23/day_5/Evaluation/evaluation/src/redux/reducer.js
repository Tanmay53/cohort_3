import { TOKEN,  ADD_DEPATMENT,  ADD_DATA, SORTBYSALARY,CHANGE_PAGE_NO } from './action'


const initialState = {
    loginData : {token : '', error : true},
    departmentData : ["Tester","FrontEnd","BackEnd","Full Stack","Soft skills"],
    mainData : [
        {"name" : "Sakshi", "id":"1","gender": "Female", "department" : "Tester", "salary": 50000},
        {"name" : "Sanjay","id":"2", "gender": "Male", "department" : "FrontEnd", "salary": 60000},
        {"name" : "Bhawna","id":"3", "gender": "Female", "department" : "BackEnd", "salary": 40000},
        {"name" : "Albert","id":"4", "gender": "Male", "department" : "Full Stack", "salary": 90000},
        {"name" : "Yogesh", "id":"5","gender": "Male", "department" : "Soft skills", "salary": 66000},
        {"name" : "Shruti", "id":"6","gender": "Female", "department" : "Tester", "salary": 9000},
        {"name" : "Sim","id":"7", "gender": "Male", "department" : "FrontEnd", "salary": 608000},
        {"name" : "vijay","id":"8", "gender": "Female", "department" : "BackEnd", "salary": 40000},
        {"name" : "Ali","id":"9", "gender": "Male", "department" : "Full Stack", "salary": 45000},
        {"name" : "Yash", "id":"10","gender": "Male", "department" : "Soft skills", "salary": 10000},
      
    ],
    page: 1,
    perPage: 20,
}

const reducer = (state = initialState,{type,payload}) => {
    switch(type){
        case TOKEN:
            if(payload.error === false){
                return {
                    ...state,
                    loginData : payload
                }
            }
            break;

        case ADD_DEPATMENT:
            console.log(payload)
            return {
                ...state,
                departmentData : [...state.departmentData, payload]
            };

        case ADD_DATA:
            console.log(payload)
            return {
                ...state,
                mainData : [...state.mainData, payload]
            };
        
        case SORTBYSALARY:
                console.log(payload)
                let sortOrder = payload
                console.log(sortOrder)
                if( sortOrder === 'lowtohigh'){
                    return {
                        ...state,
                        mainData: [...state.mainData.sort((a,b) => a.salary - b.salary )]
                    }
                }
                else if( sortOrder === 'hightolow') {
                    return {
                        ...state,
                        mainData: [...state.mainData.sort((a,b) => b.salary - a.salary)]
                    }
                }
                break

     
        case CHANGE_PAGE_NO:
                if(payload<1)
                  return state
                return {
                  ...state,
                  page: payload
                }

        default :
            return state;
    }
}

export default reducer;