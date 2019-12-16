import React from 'react';

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: this.props.tags
    };
  }
  printTags(tags) {
    let skills = [];
    tags.forEach(tag => {
      skills.push(<span className='badge'>{tag}</span>);
    });

    return skills;
  }
  render() {
    return (
      <div className='bg-dark skills'>
        <span>SKILSS</span>
        <div className='tags'>{this.printTags(this.state.skills)}</div>
      </div>
    );
  }
}

export default Skills;
