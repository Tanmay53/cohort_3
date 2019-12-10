import React from 'react';

class Anchor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgClass: `w-200 text-white round padding-custom ${this.props.class}`,
      content: this.props.content
    };
  }

  render() {
    return (
      <div className='padding-custom'>
        <a href='' className={this.state.bgClass}>
          {this.state.content}
        </a>
      </div>
    );
  }
}

export default Anchor;
