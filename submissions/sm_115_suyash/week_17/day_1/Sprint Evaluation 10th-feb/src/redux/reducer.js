import { SHOW_ROOMS, BOOK_ROOM, LOGIN_FORM, FILTER_FLOOR } from "./action";

const initialState = {
  filterRoomList: [
    {
      id: 1,
      floor: 1,
      room_name: "Management",
      capacity: 20,
      pricePerDay: 5000,
      isBooked: false
    },
    {
      id: 2,
      floor: 1,
      room_name: "Developer",
      capacity: 100,
      pricePerDay: 35000,
      isBooked: false
    },
    {
      id: 3,
      floor: 2,
      room_name: "Frontend ",
      capacity: 35,
      pricePerDay: 22000,
      isBooked: false
    },
    {
      id: 4,
      floor: 2,
      room_name: "Backend ",
      capacity: 30,
      pricePerDay: 10000,
      isBooked: false
    },
    {
      id: 5,
      floor: 3,
      room_name: "Full-stack",
      capacity: 15,
      pricePerDay: 15000,
      isBooked: false
    },
    {
      id: 6,
      floor: 3,
      room_name: "Research",
      capacity: 25,
      pricePerDay: 15000,
      isBooked: false
    }
  ],
  roomList: [],
  totalPrice: 0,
  email: "admin",
  password: "admin",
  isAuth: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ROOMS:
      return {
        ...state,
        roomList: [...state.filterRoomList]
      };
    case BOOK_ROOM:
      alert("Booking successfully");
      console.log("------>", state, action);
      state.roomList = [...state.filterRoomList];

      return {
        ...state,
        totalPrice: action.totalPrice,
        roomList: state.roomList.map(item => {
          if (item.id == action.payload) {
            item.isBooked = true;
            return item;
          } else {
            return item;
          }
        })
      };
    case LOGIN_FORM:
      if (
        state.email == action.payload.email &&
        state.password == action.payload.password
      ) {
        return {
          ...state,
          isAuth: true
        };
      } else {
        alert("Invalid email OR password");
      }

    case FILTER_FLOOR:
      console.log(action);
      console.log(state);
      state.roomList = [...state.filterRoomList];
      return {
        ...state,
        roomList: state.roomList.filter(val => {
          if (val.floor == action.payload) {
            return val;
          }
        })
      };
    default:
      return state;
  }
};

export default reducer;
