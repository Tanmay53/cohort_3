const initRoomStatus = {
    tuners: {
      total_no_of_records: 10,
      records_per_page: 5,
      current_page: 1,
      from: new Date(),
      to: new Date()    
    },
    buttons: [1],
    floors: [1],
    data_source: [  {'id': '1','name': 'Matrix', 'floor': 1, 'capacity': 5, 'price': 500, 'booking': []},
                    {'id': '2','name': 'Spartans', 'floor': 2, 'capacity': 15, 'price': 1500, 'booking': []},
                    {'id': '3','name': 'X-Men', 'floor': 4, 'capacity': 2, 'price': 100, 'booking': []},
                    {'id': '4','name': 'Braveheart', 'floor': 3, 'capacity': 10, 'price': 500, 'booking': []},
                    {'id': '5','name': 'Frozen', 'floor': 2, 'capacity': 7, 'price': 0, 'booking': []},
                    {'id': '6','name': 'Mars', 'floor': 5, 'capacity': 20, 'price': 2000, 'booking': []},
                    {'id': '7','name': 'Tempest', 'floor': 1, 'capacity': 5, 'price': 500, 'booking': []},
                    {'id': '8','name': 'Tornado', 'floor': 2, 'capacity': 10, 'price': 600, 'booking': []},
                    {'id': '9','name': 'Venus', 'floor': 1, 'capacity': 5, 'price': 700, 'booking': []},
                    {'id': '10','name': 'Spiderman', 'floor': 2, 'capacity': 2, 'price': 200, 'booking': []}
                ],   
    rooms_view: [] 
}

const get_sorted_rooms = (data, basedOn, order) => {
  if (order === 'asc') {
      return data.sort((a, b) => {
          return a[basedOn] - b[basedOn]
      })
  }
  else {
      return data.sort((a, b) => {
        return b[basedOn] - a[basedOn]
    })
  }
}


const no_collapse = (date1, booked_dates) => {
  for(let i = 0; i< booked_dates.length; i++) {
    let date2 = booked_dates[i]

    console.log('date1: ', date1, 'date2: ', date2)
    
    if (new Date(date1['from']) >=  new Date(date2['from']) && new Date(date1['from']) <= new Date(date2['to']))
    return false
  
    if (new Date(date2['from']) <= new Date(date1['to']) && new Date(date2['to']) >= new Date(date1['to'])) 
      return false
  }

  return true

}

const data_chunk = (state, page_no, records_per_page) => {
  let beg = (page_no - 1) * records_per_page
  let end = page_no * records_per_page - 1

  const data_to_display = state.data_source.slice(beg, end)
  // some more work

  let new_chunk = []
  const target_date = {'from': state.tuners.dateFrom, 'to': state.tuners.dateTo}

  for(let i = 0; i < data_to_display.length; i++) {
    if (data_to_display[i]['booking'].length === 0 || no_collapse(target_date, data_to_display[i]['booking'])) {
      new_chunk.push(data_to_display[i])
    }
  }

  return new_chunk
}


const roomReducer = (state = initRoomStatus, action) => {
  switch(action.type) {

    case 'LOAD_DATA':
      return {
        ...state,
        rooms_view: data_chunk(state, state.tuners.current_page, state.tuners.records_per_page)
      }

    case 'SET_TUNERS':
      return {
          ...state,
          tuners: {...state.tuners, 
                    current_page: action.payload.current_page,
                    from: new Date(action.payload.dateFrom),
                    to: new Date(action.payload.dateTo) 
                  },
          buttons: [...Array(Math.ceil(state.tuners.total_no_of_records / state.tuners.records_per_page)).keys()].map((item) => {
            return item + 1
          }),
          floors: [...Array(7).keys()].map((item) => {
            return item + 1
          }),

          rooms_view: data_chunk(state, state.tuners.current_page, state.tuners.records_per_page)
      }
        
    case 'SORT_ROOM':
      let data = data_chunk(state, state.tuners.current_page, state.tuners.records_per_page)
      return {
        ...state,
        rooms_view: get_sorted_rooms(data, action.payload.basedOn, action.payload.order)
      }
    case 'PAGED_ROOM':
      return {
        ...state,
        rooms_view: state.rooms.slice(Number(action.payload.beg), Number(action.payload.end))
      }
    case 'FILTER_ROOM':
      let temp_data = data_chunk(state, state.tuners.current_page, state.tuners.records_per_page)
      return {
        ...state,
        rooms_view: temp_data.filter((item) => {
          return Number(item['floor']) === action.payload
        })
      }
    case 'CHANGE_DATE_RANGE':
      /* return {
        ...state,
        rooms: get_filtered_rooms(state.rooms, action.payload)
      } */
      break
    case 'MAKE_BOOKING':
      let all_recs = data_chunk(state, state.tuners.current_page, state.tuners.records_per_page)
      return {
        ...state,
        rooms_view: all_recs.filter((item) => {
          if (item['id'] === action.payload.id) {
            return item['booking'].push(action.payload.range)
          }
          return item
        })
      }
  default:
    return state
  }
}

export {roomReducer}