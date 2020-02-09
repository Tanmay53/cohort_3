import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux';
import { addTodo, toggleItem, deleteItem } from './reducer/action'
// import { green } from '@material-ui/core/colors';
import { Paper, TextField, Button, Container, Typography, Box, Checkbox } from '@material-ui/core';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      completedTask: [],
      isShow: false
    }
  }

  handelComplete = () => {
    console.log("Handle Complete called")
    const comp = this.props.todo
    // console.log("hande",comp)
    let todoData = comp.filter(item => item.completed === true);
    this.setState({
      completedTask: todoData
    })
  }

  render() {
    const data = this.props.todo
    console.log("map data", data)
    return (
      <Container maxWidth="sm">

        <Paper elevation={10} style={{ padding: 50, marginTop: 50, marginLeft: "auto", marginRight: "auto", display: "block" }}>
          <Typography style={{ textAlign: "center" }} variant="h2"  >To Do App</Typography>
          <TextField onChange={(e) => this.setState({ input: e.target.value })} label="Add Task" variant="outlined" />
          <Button variant="outlined" onClick={() => this.props.addTodo(this.state.input)} style={{ padding: 15, marginLeft: 20 }}>ADD TASK</Button>
          <Typography style={{ padding: 30, textAlign: "center" }} variant="h4"  >Added Task</Typography>
          {data.map((item, index) =>
            <Paper key={item.itemName + index} style={{ padding: 10, margin: 10 }} elevation={10}>
              <Box display="flex">
                <Box>
                  <Checkbox onClick={() => this.props.toggleItem(item.itemName)} value="secondary" color="primary" />
                </Box>
                <Box flexGrow={1} style={{ marginTop: 10 }} >{item.itemName} </Box>
                <Box style={{ marginTop: 10 }} ><Button onClick={() => this.props.deleteItem(index)} variant="outlined">Delete Task</Button></Box>
              </Box>
            </Paper>
          )}

          <Button style={{ padding: 20, marginLeft: "auto", marginRight: "auto", display: "block", marginTop: 15 }} variant="outlined" onClick={this.handelComplete}>Completed Task</Button>

          {this.state.completedTask.map((item, index) =>
            <Paper key={item.itemName + index} style={{ padding: 10, margin: 10 }} elevation={10}>
              <Box display="flex">
                <Box style={{ marginTop: 10, textAlign: "center", textDecoration: "" }} >{item.itemName} </Box>
              </Box>
            </Paper>
          )}

        </Paper>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  todo: state
})

const mapDispatchToProps = dispatch => {
  return {
    addTodo: item => dispatch(addTodo(item)),
    toggleItem: item => dispatch(toggleItem(item)),
    deleteItem: index => dispatch(deleteItem(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);