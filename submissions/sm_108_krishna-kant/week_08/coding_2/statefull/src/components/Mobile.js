import React from 'react';
import List from './lists/List';
class Mobile extends React.Component {
  constructor() {
    super();
    this.state = {
      operating: ['Android', 'Blackberry', 'iPhone', 'Windows Phone'],
      manufaturers: ['Samsung', 'HTC', 'Micromax', 'Apple']
    };
  }
  render() {
    return (
      <div>
        <h2>Mobile Operating System</h2>
        <List items={this.state.operating} />
        <h2>Mobile Manufacturers</h2>
        <List items={this.state.manufaturers} />
      </div>
    );
  }
}

export default Mobile;
