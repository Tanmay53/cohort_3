import React from 'react';

class Drawer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className='bg-light'>{this.props.children}</div>;
  }
}

export default Drawer;
