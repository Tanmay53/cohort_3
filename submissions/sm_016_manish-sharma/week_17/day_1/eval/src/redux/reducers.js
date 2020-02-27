import {GO_TO_BOOKING, CONFIRM, FETCH_GITHUB_REQUEST, FETCH_GITHUB_SUCCESS1, FETCH_GITHUB_SUCCESS2} from './actions'

var initialState={
    placeholder:[
        {name:'Tempest',floor:2,capacity:5,price:5000,avialable:'YES',id:'TC014',total:0},
        {name:'Stars',floor:5,capacity:4,price:4000,avialable:'YES',id:'TP334',total:0},
        {name:'Canyon',floor:3,capacity:10,price:10000,avialable:'YES',id:'TF425',total:0},
        {name:'Renegade',floor:1,capacity:2,price:2000,avialable:'YES',id:'TF612',total:0},
        {name:'Orion',floor:4,capacity:8,price:8000,avialable:'YES',id:'TS234',total:0},
        {name:'Royal',floor:1,capacity:4,price:4000,avialable:'YES',id:'TV234',total:0},
        {name:'Suite',floor:6,capacity:2,price:2000,avialable:'YES',id:'TG734',total:0},
        {name:'e-zone',floor:5,capacity:6,price:6000,avialable:'YES',id:'TS463',total:0},
        {name:'Nap room',floor:2,capacity:1,price:5000,avialable:'YES',id:'TX762',total:0}
    ],
    update:[],
    orders:[],
    validNot:true,
    dataLogin:{error:true},
    dataReg:{error:true}
}

export const reducers=(state=initialState,action)=>{
    switch (action.type) {
        case GO_TO_BOOKING:
            let items=state.placeholder
            let newItem= items.find(e=>e.name==action.payload.itemName)
            let newItem2={...newItem,total:action.payload.hrs}
            // console.log('newItem',newItem)
            return{...state,update:[newItem2]}
        case CONFIRM:
            // console.log(action.payload)
            let orderList=state.orders
            let placeholderList=state.placeholder
            for(let i = 0; i < placeholderList.length;i++){
                if(action.payload.name === placeholderList[i].name){
                    placeholderList[i].avialable = 'NO'
                    return {...state,
                        orders:[...orderList,action.payload],
                        placeholder:[...placeholderList]}
                }
            }
        case FETCH_GITHUB_REQUEST:
            return{
                ...state,
                query:action.query
            }
        case FETCH_GITHUB_SUCCESS1:
            return{
                ...state,
                dataLogin:action.data,
                validNot:action.data.error
            }
        case FETCH_GITHUB_SUCCESS2:
            return{
                ...state,
                dataReg:action.data
            }
        default:
            return state
    }
}