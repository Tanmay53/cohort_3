import {GO_TO_BOOKING, CONFIRM} from './actions'

var initialState={
    placeholder:[
        {name:'tempest',floor:2,capacity:5,price:5000,avialable:'YES',id:'TC014',total:0},
        {name:'stars',floor:5,capacity:4,price:4000,avialable:'YES',id:'TP334',total:0},
        {name:'canyon',floor:3,capacity:10,price:10000,avialable:'YES',id:'TF425',total:0},
        {name:'renegade',floor:1,capacity:2,price:2000,avialable:'YES',id:'TF612',total:0},
        {name:'orion',floor:4,capacity:8,price:8000,avialable:'YES',id:'TS234',total:0},
        {name:'royal',floor:1,capacity:4,price:4000,avialable:'YES',id:'TV234',total:0},
        {name:'suite',floor:3,capacity:2,price:2000,avialable:'YES',id:'TG734',total:0},
        {name:'e-zone',floor:5,capacity:6,price:6000,avialable:'YES',id:'TS463',total:0},
        {name:'nap room',floor:2,capacity:1,price:5000,avialable:'YES',id:'TX762',total:0}
    ],
    update:[],
    orders:[]
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
            let orderList=state.orders
            return {...state,orders:[...orderList,action.payload]}
        default:
            return state
    }
}