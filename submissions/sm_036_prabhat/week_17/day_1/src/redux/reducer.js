

const initialState = {
    loginData : [],
    roomData : [
        {floor : 1, roomName : 'ABC', capacity : 10, price : 500},
        {floor : 2, roomName : 'XYZ', capacity : 10, price : 800},
        {floor : 2, roomName : 'ACC', capacity : 10, price : 900},
        {floor : 1, roomName : 'AXC', capacity : 10, price : 500},
        {floor : 3, roomName : 'ABC', capacity : 5, price : 5500},
        {floor : 5, roomName : 'MTM', capacity : 25, price : 500},
        {floor : 3, roomName : 'LOC', capacity : 30, price : 500},
        {floor : 6, roomName : 'MMM', capacity : 50, price : 800},
        {floor : 2, roomName : 'AAA', capacity : 40, price : 5500},
        {floor : 3, roomName : 'BBB', capacity : 30, price : 8500},
        {floor : 5, roomName : 'BBC', capacity : 19, price : 500},
        {floor : 4, roomName : 'LMT', capacity : 10, price : 2500},
        {floor : 4, roomName : 'LNT', capacity : 50, price : 6000},
        {floor : 3, roomName : 'BOM', capacity : 16, price : 7000},
        {floor : 3, roomName : 'DEL', capacity : 18, price : 8000},
        {floor : 1, roomName : 'GOA', capacity : 20, price : 9000},
        {floor : 1, roomName : 'MOC', capacity : 15, price : 10000}
    ],
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        default :
            return state
    }
}


export default reducer;