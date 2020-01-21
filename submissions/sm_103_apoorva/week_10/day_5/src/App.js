import React from 'react';
import SignUp from './SignUp'
import {store} from './Redux/Store'
import {Provider} from 'react-redux'
import SignIn from './SignIn'

function App() {
  return (
    <div>
      <Provider store={store}>
        <SignUp />
        <br></br>
        <SignIn />
      </Provider>
    </div>
  );
}

export default App;


