/** @format */

const initialState = {
    data: [ {
        id : 1,
        floor : 1,
        roomName : "Room 1",
        capacity : "50",
        pricePerDay : 500,
        isBooked : false
    },
    {
        id : 2,
        floor : 2,
        roomName : "Room 2",
        pricePerDay : 600,
        capacity : "200",
        isBooked : false
    },
    {
        id : 3,
        floor : 3,
        roomName : "Room 3",
        pricePerDay : 800,
        capacity:"300",
        isBooked : false
    },
    {
        id : 4,
        floor : 5,
        roomName : "Room 4",
        pricePerDay : 700,
        capacity : "400",
        isBooked : false
    },
    {
        id : 5,
        floor : 3,
        roomName : "Room 5",
        pricePerDay : 400,
        capacity : "50",
        isBooked : false
    },
    {
        id : 6,
        floor : 6,
        roomName : "Room 6",
        pricePerDay : 400,
        capacity : "70",
        isBooked : false

    },
    {
        id : 7,
        floor : 7,
        roomName : "Room 7",
        pricePerDay : 400,
        capacity : "50",
        isBooked : false
    },
    {
        id : 8,
        floor : 8,
        roomName : "Room 8",
        pricePerDay : 400,
        capacity : "50",
        isBooked : false
    },
    {
        id : 9,
        floor : 9,
        roomName : "Room 9",
        pricePerDay : 400,
        capacity : "50",
        isBooked : false
    }]
  };
  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      
      default:
        return state;
    }
  };
  
  export default Reducer;
  