import React from 'react';
import Anchor from './anchors/Anchor';
class Links extends React.Component {
  render() {
    return (
      <div>
        <div className='d-flex'>
          <Anchor class='bg-primary' content='JOIN US' />
          <Anchor class='bg-grey' content='SETTINGS' />
        </div>
        <div className='d-flex'>
          <Anchor class='bg-orange' content='LOGIN' />
          <Anchor class='bg-red' content='CONTACT US' />
        </div>
        <div className='d-flex'>
          <Anchor class='bg-green' content='SEARCH' />
          <Anchor class='bg-violet' content='HELP' />
        </div>
        <div className='d-flex'>
          <Anchor class='bg-pink' content='HOME' />
          <Anchor class='bg-golden' content='DOWNLOADS' />
        </div>
      </div>
    );
  }
}

export default Links;
