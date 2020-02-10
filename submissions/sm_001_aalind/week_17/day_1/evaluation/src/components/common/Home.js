import React from 'react';
import Room from './Room';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      all_rooms: [],
      sort_by: {
        price_per_day: true,
        capacity: true
      }
    };
  }

  sortFunction = event => {
    let name = event.target.name;
    this.setState(prevState => {
      let sorted_rooms = [];

      if (!prevState.sort_by[name]) {
        sorted_rooms = prevState.all_rooms.sort(
          (r1, r2) => r1[name] - r2[name]
        );
      } else {
        sorted_rooms = prevState.all_rooms.sort(
          (r1, r2) => r2[name] - r1[name]
        );
      }

      return {
        all_rooms: sorted_rooms,
        sort_by: {
          ...prevState.sort_by,
          [name]: !prevState.sort_by[name]
        }
      };
    });
  };

  componentDidMount = () => {
    this.setState({
      ...this.state,
      all_rooms: this.props.all_rooms.filter(room => !room.booked)
    });
  };

  render() {
    return (
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <h1>Room List</h1>
        </div>
        <div className='row'>
          Sort by:{' '}
          <button name='price_per_day' onClick={this.sortFunction}>
            price
          </button>
          <button name='capacity' onClick={this.sortFunction}>
            capacity
          </button>
        </div>
        <div className='row d-flex justify-content-sm-center justify-content-center justify-content-md-between justify-content-lg-center'>
          {this.state.all_rooms
            .filter(room => !room.booked)
            .map((room, index) => {
              return <Room key={index + 1} room_info={room} />;
            })}
        </div>
      </div>
    );
  }
}

export default Home;
