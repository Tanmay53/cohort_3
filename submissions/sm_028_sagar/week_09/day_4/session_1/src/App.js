import React, { Component } from 'react'
import {AppBar,Toolbar,Container,Box,Typography} from '@material-ui/core'
import AddTodo from './Components/AddTodo'
import styles from './app.module.css'
import Display from './Components/Display'
import Completed from './Components/Completed'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      todo : [],
      completed:[]
    }
  }

  handleInput = input => {
    let item = {
      id:Math.random()+1,
      value:input,
      isChecked:false
    }
    let newTodo = [...this.state.todo, item]
    this.setState({
      todo : newTodo
    })
  }

  handleDoneTodo = input =>{
      if(input.isChecked === true){
          input.isChecked = false
      }else{
          input.isChecked = true
      }
      let newArr = this.state.todo.filter(ele => ele.id !== input.id)
      console.log(input)
      this.setState({
        todo:[...newArr,input]
      })
  }

  handleDelete = input => {
    let newArr = this.state.todo.filter(ele => ele.id !== input.id)
    this.setState({
      todo:newArr      
    })
  }

  render() {
    return (
      <div>
        <AppBar color='primary' classes={{root: styles.box}} position='fixed'>
              <Typography variant='h6'>Todo Application</Typography>    
        </AppBar>
        <Container>
              <Box mt={12}>
                  <AddTodo addTodo={this.handleInput} /> 
              </Box>
        </Container>
        <Container>
              <Box mt={2}>
                Added Todo:
                  <Display doneTodo={this.handleDoneTodo} deleteTodo={this.handleDelete} data={this.state.todo}  />
              </Box>
        </Container>
        <Container>
              <Box mt={2}>
                Completed Todo:
                  <Completed data={this.state.todo.filter(ele => ele.isChecked)} />
              </Box>
        </Container>
       
        {/* display added todo */}
        {/* display completed todo */}
      </div>
    )
  }
}
