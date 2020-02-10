const initRoomStatus = {
    rooms: [ {'name': 'Matrix', 'floor': 1, 'capacity': 5, 'price': 500},
             {'name': 'Spartans', 'floor': 2, 'capacity': 15, 'price': 1500},
             {'name': 'X-Men', 'floor': 4, 'capacity': 2, 'price': 100},
             {'name': 'Braveheart', 'floor': 3, 'capacity': 10, 'price': 500},
             {'name': 'Frozen', 'floor': 2, 'capacity': 7, 'price': 0},
             {'name': 'Mars', 'floor': 5, 'capacity': 20, 'price': 2000},
             {'name': 'Tempest', 'floor': 1, 'capacity': 5, 'price': 500},
             {'name': 'Tornado', 'floor': 2, 'capacity': 10, 'price': 600},
             {'name': 'Venus', 'floor': 1, 'capacity': 5, 'price': 700},
             {'name': 'Spiderman', 'floor': 2, 'capacity': 2, 'price': 200}
           ],
    rooms_view: []

}

const roomReducer = (state = initRoomStatus, action) => {
  switch(action.type) {
    case 'SORT_ROOM':
      if (action.payload['basedOn'] === 'floor') {
          if (action.payload['order'] === 'asc') {
              return {
                ...state,
                rooms_view: state.rooms_view.sort((a, b) => {
                  return a.floor - b.floor
              })
            }
          }
        else {
              return {
                ...state,
                rooms_view: state.rooms_view.sort((a, b) => {
                  return b.floor - a.floor
              })
            }
          }
        }
      else if (action.payload['basedOn'] === 'price') {
            if (action.payload['order'] === 'asc') {
                return {
                  ...state,
                  rooms_view: state.rooms_view.sort((a, b) => {
                    return a.price - b.price
                })
              }
            }
          else {
                return {
                  ...state,
                  rooms_view: state.rooms_view.sort((a, b) => {
                    return b.price - a.price
                })
              }
            }

          }
          else if (action.payload['basedOn'] === 'capacity') {
            if (action.payload['order'] === 'asc') {
                return {
                  ...state,
                  rooms_view: state.rooms_view.sort((a, b) => {
                    return a.capacity - b.capacity
                })
              }
            }
          else {
                return {
                  ...state,
                  rooms_view: state.rooms_view.sort((a, b) => {
                    return b.capacity - a.capacity
                })
              }
            }

          }  
          break
      case 'PAGED_ROOM':
        return {
          ...state,
          rooms_view: state.rooms.slice(Number(action.payload.beg), Number(action.payload.end))
        }
      default:
        return state
    }
    return state
}

export {roomReducer}