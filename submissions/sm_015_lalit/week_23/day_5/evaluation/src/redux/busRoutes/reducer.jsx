import {
    ADD_CITY,
    ADD_BUS,
    DELETE_BUS,
    EDIT_BUS_DETAILS,
    SET_CURRENT_PAGE,
    SET_PER_PAGE
} from './actiontypes'
import uuid from 'uuid-random'


const initialState={
    cities:["Delhi","Mumbai","Hyderabad","Bangalore","Chandigarh","Amritsar","Shimla","Sonipat"],
    buses:[
        {
            key:uuid(),
            source:"Delhi",
            destination:"Mumbai",
            busNum:"XS-2034",
            schedule:"05:30"
        },
        {
            key:uuid(),
            source:"Hyderabad",
            destination:"Bangalore",
            busNum:"CS-1545",
            schedule:"12:10"
        },
        {
            key:uuid(),
            source:"Chandigarh",
            destination:"Amritsar",
            busNum:"CH-2354",
            schedule:"08:30"
        },
        {
            key:uuid(),
            source:"Delhi",
            destination:"Chandigarh",
            busNum:"DL-2004",
            schedule:"16:30"
        },
        {
            key:uuid(),
            source:"Delhi",
            destination:"Amritsar",
            busNum:"HR-1941",
            schedule:"03:15"
        },
        {
            key:uuid(),
            source:"Hyderabad",
            destination:"Mumbai",
            busNum:"TL-2734",
            schedule:"01:30"
        },
        {
            key:uuid(),
            source:"Chandigarh",
            destination:"Bangalore",
            busNum:"BS-1145",
            schedule:"10:10"
        },
        {
            key:uuid(),
            source:"Chandigarh",
            destination:"Amritsar",
            busNum:"CH-2354",
            schedule:"08:30"
        },
        {
            key:uuid(),
            source:"Delhi",
            destination:"Shimla",
            busNum:"DL-2004",
            schedule:"16:30"
        },
        {
            key:uuid(),
            source:"Mumbai",
            destination:"Chandigarh",
            busNum:"MU-0941",
            schedule:"01:15"
        },
        {
            key:uuid(),
            source:"Delhi",
            destination:"Mumbai",
            busNum:"TS-2074",
            schedule:"05:30"
        }
    ],
    currentPage:1,
    perPage:5
}

export const BusRoutesReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_CITY:
            return{
                ...state,
                cities:[...state.cities,action.payload]
            }
        case ADD_BUS:
            return{
                ...state,
                buses:[...state.buses,action.payload]
            }
        case DELETE_BUS:
            let busesCopy1=state.buses
            busesCopy1=busesCopy1.filter(e=>e.key!=action.payload)
            return{
                ...state,
                buses:busesCopy1
            }
        case EDIT_BUS_DETAILS:
            let busesCopy2=state.buses
            for(let i=0;i<busesCopy2.length;i++){
                if(busesCopy2[i].key==action.payload.key){
                    busesCopy2[i]=action.payload
                }
            }
            return{
                ...state,
                buses:busesCopy2
            }
        case SET_PER_PAGE:
            return{...state,
            perPage:action.payload
            }
        case SET_CURRENT_PAGE:
            return{...state,
            currentPage:action.payload
        }    
            default:
                return state
    }

}