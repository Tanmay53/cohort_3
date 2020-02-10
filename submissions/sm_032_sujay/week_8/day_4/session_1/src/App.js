import React from 'react';

import Form from './components/Forms/Forms'

class App extends React.Component{
  render(){
    return(
      <div>
        <h2 className="display-3 text-center"><span className="text-info">C</span> <span className="text-warning">R</span> <span className="text-success">U</span> <span className="text-danger">D</span></h2>
        <Form/>
        
      </div>
    )
  }
}

export default App;
