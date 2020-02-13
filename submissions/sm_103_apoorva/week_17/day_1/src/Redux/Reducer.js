import {LOGIN, ORDERS,SIGNOUT} from './Action'

const initialState = {
    data : [{
      "Floor_No": 10,
      "Meeting_Room_Name": "Callean",
      "Capacity": 23,
      "Price": 936,
      "image": "http://dummyimage.com/211x184.bmp/ff4444/ffffff"
    }, {
      "Floor_No": 20,
      "Meeting_Room_Name": "Bronnie",
      "Capacity": 16,
      "Price": 3066,
      "image": "http://dummyimage.com/212x184.jpg/cc0000/ffffff"
    }, {
      "Floor_No": 2,
      "Meeting_Room_Name": "Henri",
      "Capacity": 19,
      "Price": 1794,
      "image": "http://dummyimage.com/212x184.jpg/5fa2dd/ffffff"
    }, {
      "Floor_No": 18,
      "Meeting_Room_Name": "Matty",
      "Capacity": 32,
      "Price": 622,
      "image": "http://dummyimage.com/212x184.png/cc0000/ffffff"
    }, {
      "Floor_No": 13,
      "Meeting_Room_Name": "Dasi",
      "Capacity": 23,
      "Price": 3568,
      "image": "http://dummyimage.com/212x184.jpg/5fa2dd/ffffff"
    }, {
      "Floor_No": 7,
      "Meeting_Room_Name": "Tabbatha",
      "Capacity": 19,
      "Price": 3607,
      "image": "http://dummyimage.com/211x184.jpg/cc0000/ffffff"
    }, {
      "Floor_No": 14,
      "Meeting_Room_Name": "Saunders",
      "Capacity": 24,
      "Price": 1810,
      "image": "http://dummyimage.com/211x184.bmp/5fa2dd/ffffff"
    }, {
      "Floor_No": 18,
      "Meeting_Room_Name": "Deina",
      "Capacity": 28,
      "Price": 2094,
      "image": "http://dummyimage.com/212x184.bmp/ff4444/ffffff"
    }, {
      "Floor_No": 3,
      "Meeting_Room_Name": "Alden",
      "Capacity": 5,
      "Price": 1241,
      "image": "http://dummyimage.com/211x184.jpg/ff4444/ffffff"
    }, {
      "Floor_No": 7,
      "Meeting_Room_Name": "Noble",
      "Capacity": 35,
      "Price": 2351,
      "image": "http://dummyimage.com/212x184.jpg/5fa2dd/ffffff"
    }, {
      "Floor_No": 16,
      "Meeting_Room_Name": "Ettie",
      "Capacity": 31,
      "Price": 2656,
      "image": "http://dummyimage.com/211x184.png/ff4444/ffffff"
    }, {
      "Floor_No": 19,
      "Meeting_Room_Name": "Lucias",
      "Capacity": 23,
      "Price": 2057,
      "image": "http://dummyimage.com/212x184.bmp/ff4444/ffffff"
    }, {
      "Floor_No": 2,
      "Meeting_Room_Name": "Brenna",
      "Capacity": 18,
      "Price": 3882,
      "image": "http://dummyimage.com/212x184.png/ff4444/ffffff"
    }, {
      "Floor_No": 17,
      "Meeting_Room_Name": "Lurlene",
      "Capacity": 17,
      "Price": 557,
      "image": "http://dummyimage.com/212x184.png/cc0000/ffffff"
    }, {
      "Floor_No": 8,
      "Meeting_Room_Name": "Brose",
      "Capacity": 22,
      "Price": 1700,
      "image": "http://dummyimage.com/211x184.jpg/5fa2dd/ffffff"
    }, {
      "Floor_No": 20,
      "Meeting_Room_Name": "Dorthea",
      "Capacity": 11,
      "Price": 3996,
      "image": "http://dummyimage.com/212x184.jpg/dddddd/000000"
    }, {
      "Floor_No": 2,
      "Meeting_Room_Name": "Cathryn",
      "Capacity": 8,
      "Price": 4263,
      "image": "http://dummyimage.com/211x184.png/5fa2dd/ffffff"
    }, {
      "Floor_No": 8,
      "Meeting_Room_Name": "Martainn",
      "Capacity": 29,
      "Price": 1575,
      "image": "http://dummyimage.com/211x184.png/ff4444/ffffff"
    }, {
      "Floor_No": 12,
      "Meeting_Room_Name": "Becki",
      "Capacity": 8,
      "Price": 3222,
      "image": "http://dummyimage.com/212x184.png/5fa2dd/ffffff"
    }, {
      "Floor_No": 17,
      "Meeting_Room_Name": "Alvis",
      "Capacity": 30,
      "Price": 1593,
      "image": "http://dummyimage.com/211x184.bmp/5fa2dd/ffffff"
    }, {
      "Floor_No": 16,
      "Meeting_Room_Name": "Laughton",
      "Capacity": 15,
      "Price": 3064,
      "image": "http://dummyimage.com/212x184.png/dddddd/000000"
    }, {
      "Floor_No": 15,
      "Meeting_Room_Name": "Jasmin",
      "Capacity": 30,
      "Price": 2659,
      "image": "http://dummyimage.com/211x184.png/ff4444/ffffff"
    }, {
      "Floor_No": 11,
      "Meeting_Room_Name": "Gardie",
      "Capacity": 7,
      "Price": 1368,
      "image": "http://dummyimage.com/211x184.bmp/ff4444/ffffff"
    }, {
      "Floor_No": 20,
      "Meeting_Room_Name": "Matt",
      "Capacity": 27,
      "Price": 1567,
      "image": "http://dummyimage.com/211x184.bmp/ff4444/ffffff"
    }, {
      "Floor_No": 12,
      "Meeting_Room_Name": "Sollie",
      "Capacity": 31,
      "Price": 4596,
      "image": "http://dummyimage.com/212x184.png/cc0000/ffffff"
    }, {
      "Floor_No": 18,
      "Meeting_Room_Name": "Shina",
      "Capacity": 11,
      "Price": 3737,
      "image": "http://dummyimage.com/212x184.bmp/ff4444/ffffff"
    }, {
      "Floor_No": 11,
      "Meeting_Room_Name": "Sebastiano",
      "Capacity": 37,
      "Price": 4474,
      "image": "http://dummyimage.com/212x184.jpg/ff4444/ffffff"
    }, {
      "Floor_No": 2,
      "Meeting_Room_Name": "Pearl",
      "Capacity": 20,
      "Price": 4319,
      "image": "http://dummyimage.com/211x184.jpg/ff4444/ffffff"
    }, {
      "Floor_No": 1,
      "Meeting_Room_Name": "Jarret",
      "Capacity": 18,
      "Price": 972,
      "image": "http://dummyimage.com/211x184.bmp/dddddd/000000"
    }, {
      "Floor_No": 6,
      "Meeting_Room_Name": "Babita",
      "Capacity": 16,
      "Price": 3303,
      "image": "http://dummyimage.com/212x184.jpg/dddddd/000000"
    }, {
      "Floor_No": 8,
      "Meeting_Room_Name": "Germayne",
      "Capacity": 17,
      "Price": 2044,
      "image": "http://dummyimage.com/211x184.png/ff4444/ffffff"
    }, {
      "Floor_No": 6,
      "Meeting_Room_Name": "Wilburt",
      "Capacity": 5,
      "Price": 1714,
      "image": "http://dummyimage.com/212x184.jpg/5fa2dd/ffffff"
    }, {
      "Floor_No": 16,
      "Meeting_Room_Name": "Marybeth",
      "Capacity": 19,
      "Price": 4049,
      "image": "http://dummyimage.com/212x184.png/dddddd/000000"
    }, {
      "Floor_No": 9,
      "Meeting_Room_Name": "Shurwood",
      "Capacity": 26,
      "Price": 1789,
      "image": "http://dummyimage.com/212x184.png/cc0000/ffffff"
    }, {
      "Floor_No": 5,
      "Meeting_Room_Name": "Portia",
      "Capacity": 9,
      "Price": 4054,
      "image": "http://dummyimage.com/211x184.jpg/dddddd/000000"
    }, {
      "Floor_No": 11,
      "Meeting_Room_Name": "Germain",
      "Capacity": 29,
      "Price": 4039,
      "image": "http://dummyimage.com/211x184.bmp/ff4444/ffffff"
    }, {
      "Floor_No": 14,
      "Meeting_Room_Name": "Cesaro",
      "Capacity": 17,
      "Price": 1645,
      "image": "http://dummyimage.com/212x184.bmp/cc0000/ffffff"
    }, {
      "Floor_No": 3,
      "Meeting_Room_Name": "Erastus",
      "Capacity": 31,
      "Price": 4055,
      "image": "http://dummyimage.com/211x184.jpg/ff4444/ffffff"
    }, {
      "Floor_No": 10,
      "Meeting_Room_Name": "Arlette",
      "Capacity": 31,
      "Price": 595,
      "image": "http://dummyimage.com/211x184.jpg/ff4444/ffffff"
    }, {
      "Floor_No": 17,
      "Meeting_Room_Name": "Orion",
      "Capacity": 30,
      "Price": 4848,
      "image": "http://dummyimage.com/211x184.png/5fa2dd/ffffff"
    }, {
      "Floor_No": 12,
      "Meeting_Room_Name": "Tim",
      "Capacity": 38,
      "Price": 1620,
      "image": "http://dummyimage.com/212x184.bmp/cc0000/ffffff"
    }, {
      "Floor_No": 5,
      "Meeting_Room_Name": "Thain",
      "Capacity": 23,
      "Price": 3992,
      "image": "http://dummyimage.com/211x184.png/dddddd/000000"
    }, {
      "Floor_No": 18,
      "Meeting_Room_Name": "Lucky",
      "Capacity": 14,
      "Price": 1739,
      "image": "http://dummyimage.com/212x184.jpg/5fa2dd/ffffff"
    }, {
      "Floor_No": 4,
      "Meeting_Room_Name": "Flem",
      "Capacity": 17,
      "Price": 658,
      "image": "http://dummyimage.com/212x184.png/ff4444/ffffff"
    }, {
      "Floor_No": 7,
      "Meeting_Room_Name": "Reidar",
      "Capacity": 24,
      "Price": 4194,
      "image": "http://dummyimage.com/211x184.jpg/cc0000/ffffff"
    }, {
      "Floor_No": 5,
      "Meeting_Room_Name": "Lorain",
      "Capacity": 5,
      "Price": 3083,
      "image": "http://dummyimage.com/211x184.bmp/ff4444/ffffff"
    }, {
      "Floor_No": 16,
      "Meeting_Room_Name": "Cathlene",
      "Capacity": 17,
      "Price": 4030,
      "image": "http://dummyimage.com/211x184.bmp/dddddd/000000"
    }, {
      "Floor_No": 6,
      "Meeting_Room_Name": "Joelynn",
      "Capacity": 33,
      "Price": 4010,
      "image": "http://dummyimage.com/212x184.jpg/ff4444/ffffff"
    }, {
      "Floor_No": 18,
      "Meeting_Room_Name": "Ermanno",
      "Capacity": 23,
      "Price": 1514,
      "image": "http://dummyimage.com/211x184.jpg/ff4444/ffffff"
    }, {
      "Floor_No": 13,
      "Meeting_Room_Name": "Nefen",
      "Capacity": 18,
      "Price": 4198,
      "image": "http://dummyimage.com/212x184.png/5fa2dd/ffffff"
    }],
    form : false,
    token : "",
    order : []
}

const Reducer = (state = initialState, action) =>{
    switch(action.type)
    {
        case LOGIN :
            console.log(action.payload)
            if(action.payload.status == 200){
                return {...state,
                    form : true,
                    token : action.payload.token,
                }
            }
        case ORDERS :
          console.log(action.payload)
          let new_order = state.data.filter(ele => ele.Meeting_Room_Name == action.payload)
          console.log(new_order)
          return {...state,order:[...state.order,new_order[0]]}
        case SIGNOUT:
          return {...state,
              form : false,
              token : " ",
              order : []
          }
        default:
            return state
    }
}

export default Reducer