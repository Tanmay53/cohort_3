import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import Todo from './ToDo/Todo'
import {Provider} from 'react-redux'
import {store} from './Redux/Store'
function App() {
  return (
    <Provider store = {store}>
    <div>
      <div>
        <AppBar>
          <Toolbar>
              <Typography variant = "h4">
                Todo App
              </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <div  style={{padding:"50px 0"}}></div>
    </div>
    <Todo />
    </Provider>
  );
}

export default App;


