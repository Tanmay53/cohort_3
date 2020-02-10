import React from 'react';
import Room from './Room';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort_by: {
        price: true,
        capacity: true
      }
    };
  }

  sortFunction = event => {
    let name = event.target.name;
    this.setState(
      prevState => {
        return {
          sort_by: {
            ...prevState.sort_by,
            [name]: !prevState.sort_by[name]
          }
        };
      },
      () => console.log(this.state)
    );
  };

  render() {
    return (
      <div
        className='container'
        // style={{ background: 'red' }}
      >
        <div
          className='row d-flex justify-content-center'
          // style={{ background: 'blue' }}
        >
          <h1>Room List</h1>
        </div>
        <div className='row'>
          Sort by:{' '}
          <button name='price' onClick={this.sortFunction}>
            price
          </button>{' '}
          {/* <button name='capacity' onClick={this.sortFunction}>
            capacity
          </button> */}
        </div>
        <div className='row d-flex justify-content-sm-center justify-content-center justify-content-md-between justify-content-lg-center'>
          {/* {console.log(this.props.all_rooms)} */}

          {this.props.all_rooms
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
