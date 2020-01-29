import React from 'react';
import './App.css';
import Task from './components/Task'
import { AppBar, Toolbar, Box, Typography, TextField, Grid, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

// arr=[]
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nameArr: [],
      completed: []
    }
  }
  submit = () => {
    this.setState((state) => {
      state.nameArr.push(document.getElementById('inputs').value)
      return {
        nameArr: state.nameArr
      }
    })
  }
  todoCallback = (childData) => {
    this.setState((state) => {
      state.completed.push(childData)
      return {
        completed: state.completed
      }
    })
  }

  render() {
    return (
      <div className='m-3'>
        <AppBar position="fixed">
          <Toolbar >
            <Typography variant="h2">
              To-Do List
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />

        <Box>

          <Grid className='mt-3' container direction="row" spacing={2}>
            <Grid item xs={4}>
              <TextField fullWidth id="inputs" label="+ Add a to-do..." variant="outlined" />
            </Grid>
            <Grid item xs={2}>
              <Fab color="secondary" aria-label="add">
                <AddIcon onClick={this.submit} />
              </Fab>
            </Grid>
          </Grid>


          <Grid container direction="row" spacing={2}>
            <Grid item xs>
              <div className='h2 text-primary mt-5 font-italic'>Tasks To-Do</div>
              <div className='shadow'>
                {
                  this.state.nameArr.map(e => <div key={e} className='text-success'><Task parentCallback={this.todoCallback} name={e} /></div>)
                }
              </div>
            </Grid>
            <Grid item xs>
              <div className='h2 text-primary mt-5 font-italic text-monospace'>Completed</div>
              <div className='shadow'>
                {
                  this.state.completed.map(e => <s key={e} className='text-danger'><Task name={e} /></s>)
                }
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    )
  }
}

export default App;
