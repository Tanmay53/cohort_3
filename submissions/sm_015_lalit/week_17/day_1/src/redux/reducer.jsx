
import {LOGIN_SUCCESS, LOGIN_FAIL, CONFIRM, LOGOUT_SUCCESS} from '../components/common/action'
const initialState={
    data:[
        {
            floor:2,
            name:"Xartan",
            capacity:10,
            price:2700,
            id:"46fd4f54d",
            url:"https://via.placeholder.com/250C/",
            available:"Yes",
            idx:0
            },
            {
                floor:5,
                name:"spattula",
                capacity:8,
                price:1400,
                id:"445f6df64",
                url:"https://via.placeholder.com/250C/",
                available:"Yes",
                idx:1
                },
                {
                    floor:1,
                    name:"hostur",
                    capacity:7,
                    price:1680,
                    id:"1v3fd21v5d",
                    url:"https://via.placeholder.com/250C/",
                    available:"Yes",
                    idx:2
                    },
                    {
                        floor:3,
                        name:"bestie",
                        capacity:10,
                        price:2200,
                        id:"gfd8g74g6f",
                        url:"https://via.placeholder.com/250C/",
                        available:"Yes",
                        idx:3
                        },
                        {
                            floor:1,
                            name:"ninjax",
                            capacity:5,
                            price:1900,
                            id:"97fvdf65v6df",
                            url:"https://via.placeholder.com/250C/",
                            available:"Yes",
                            idx:4
                            },
                            {
                                floor:3,
                                name:"viking",
                                capacity:6,
                                price:1550,
                                id:"fd6g54df62",
                                url:"https://via.placeholder.com/250C/",
                                available:"Yes",
                                idx:5
                                },
                                {
                                    floor:4,
                                    name:"vikartan",
                                    capacity:5,
                                    price:1400,
                                    id:"vffd9v45d6b23",
                                    url:"https://via.placeholder.com/250C/",
                                    available:"Yes",
                                    idx:6
                                    },
                                    {
                                        floor:2,
                                        name:"Samtron",
                                        capacity:8,
                                        price:1800,
                                        id:"vfgdfgd45d6b23",
                                        url:"https://via.placeholder.com/250C/",
                                        available:"Yes",
                                        idx:7
                                        }
    ],
    LoggedIn:false
    
}

export const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case LOGIN_SUCCESS:
            let copystate={...state}
            copystate.LoggedIn=true
            return copystate
        case CONFIRM:
            let copystate2={...state}
            console.log("getting",action.payload)
            copystate2.data[action.payload]={...copystate2.data[action.payload],available:"No"}
            // console.log("dekh",copystate2.data[4])
            return copystate2
        case LOGOUT_SUCCESS:
            let copystate3={...state}
            copystate3.LoggedIn=false
            return copystate3    

        default:
            return state;
    }
}