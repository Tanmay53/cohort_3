import React from 'react';
import Person from './profile/Person';
import Skills from './profile/Skills';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      person: {
        name: 'Ricky Park',
        place: 'NEW YORK',
        desc: 'User interface designer and front-end developer',
        member: 'PRO',
        imgUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvGiS_rL46SaUVooi6PMDFBW3CNMFcwSE7BsOyJlxgTqybQ4Sg&s'
      },
      skill: [
        'UI/UX',
        'Front End Development',
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node'
      ]
    };
  }
  render() {
    return (
      <div className='corner'>
        <Person details={this.state.person} />
        <Skills tags={this.state.skill} />
      </div>
    );
  }
}

export default Profile;
