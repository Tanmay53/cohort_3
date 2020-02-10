const LOGIN = "LOGIN"
const REGISTER = "REGISTER"
const VALIDATE = "VALIDATE"
const ADD="ADD"
const SEARCH="SEARCH"

const initialState = {
    "isAuth": "false",
    "available":[],
    "rooms": [
{
    "id":0,
    "name":"ALPHA",
    "floor":"1",
    "capacity":"10",
    "price":"1000",
    "startDate":"2000-01-01",
    "endDate":"2000-10-10"
    
},
{
    "id":1,
    "name":"BETA",
    "floor":"2",
    "capacity":"20",
    "price":"2000",
    "startDate":"2002-02-02",
    "endDate":"2002-02-03"
    
},
{
    "id":2,
    "name":"GAMMA",
    "floor":"3",
    "capacity":"30",
    "price":"3000",
    "startDate":"2005-03-03",
    "endDate":"2007-03-04"
    
},
{
    "id":3,
    "name":"91",
    "floor":"3",
    "capacity":"30",
    "price":"3000",
    "startDate":"2018-03-03",
    "endDate":"2019-03-04"
    
},
{
    "id":4,
    "name":"PIYUSH",
    "floor":"4",
    "capacity":"40",
    "price":"4000",
    "startDate":"2019-04-04",
    "endDate":"2019-04-05"
    
},
{
    "id":5,
    "name":"NEWTON",
    "floor":"5",
    "capacity":"50",
    "price":"5000",
    "startDate":"2020-01-05",
    "endDate":"2020-12-07"
    
}
    ]
}
const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case VALIDATE:
            return {
                ...state,
                isAuth: !state.isAuth
            }
        case ADD:
            return {
                ...state,
                rooms: [...state, action.payload]
            }
            case SEARCH:
                return{
                    ...state,
                    available:state.rooms.filter(item=>item.startDate>=action.start &&item.endDate<=action.end)
                }
        default:
            return state
    }
}
export default reducer