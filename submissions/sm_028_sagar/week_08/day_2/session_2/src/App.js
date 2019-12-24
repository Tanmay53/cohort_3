import React from 'react'
import Add from './Components/Add'
import Todo from './Components/Todo'
import CompletedTodo from './Components/CompletedTodo'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todo:[],
            showCompleted:false
        }
    }

    style={
        width:'max-width'
    }

    handleAdd = (itemName) =>{
      let newItem = {
          name:itemName,
          isDone:false,
          id:Math.random()+1
      }

      this.setState({
          todo:[...this.state.todo, newItem]
      })
    }

    toggleDone = (id) =>{
        this.setState({
            todo:this.state.todo.map(item =>
                id === item.id?{...item,isDone:!item.isDone}:item
            )
        })
    }

    handleDel = (id) =>{
        // console.log('handleDel')
        this.setState({
            todo: this.state.todo.filter(item => item.id != id)
        })
    }

    render(){
        // console.log(this.state.todo)
        return (
                <div style={{width:'500px',margin:'50px auto'}} className='border shadow p-5'>
                    <h3>Todo List</h3>
                    <Add add={this.handleAdd}/>
                    <Todo data={this.state.todo}
                          toggleDone={this.toggleDone}  
                          label={'TODO:'}
                          del={this.handleDel}/>
                    <button className='btn btn-sm btn-primary' onClick={()=>this.setState({showCompleted: !this.state.showCompleted})}>SHOW COMPLETED TODO</button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                    {this.state.showCompleted && <CompletedTodo data={this.state.todo.filter(item => item.isDone)}
                                   toggleDone={this.toggleDone} 
                                   label={'COMPLETED:'} 
                                   del={this.handleDel}
                                   />}
                </div>  
                   
        )
    }
}

export default App