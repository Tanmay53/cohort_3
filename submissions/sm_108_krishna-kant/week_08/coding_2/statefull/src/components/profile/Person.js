import React from 'react';

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: this.props.details
    };
  }

  render() {
    return (
      <div>
        <div className='flex-primary'>
          <span className='bg-badge'>{this.state.person.member}</span>
          <div className='img-container'>
            <img className='img-fluid' src={this.state.person.imgUrl} />
          </div>
          <h2>{this.state.person.name}</h2>
          <span>{this.state.person.place}</span>
          <p>{this.state.person.desc}</p>
          <div>
            <a href='#' className='btn-primary'>
              Message
            </a>
            <a href='#' className='btn-primary-border'>
              Following
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Person;
