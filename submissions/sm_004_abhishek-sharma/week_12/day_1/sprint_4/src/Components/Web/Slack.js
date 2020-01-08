import React from 'react';
import Jumbotron from './Jumbotron'
import Video from './Video'
import Reasons from './Reasons'
import Functions from './Functions'

class Slack extends React.Component {
    render(){
        return (
            <div>
              <Jumbotron />
              <Video />
              <Reasons />
              <Functions />
            </div>
          )
    }
    
  }
  
  export default Slack
  