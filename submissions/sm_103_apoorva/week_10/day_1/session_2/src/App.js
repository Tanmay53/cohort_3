import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import Todo from './ToDo/Todo'
function App() {
  return (
    <>
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
    </>
  );
}

export default App;


