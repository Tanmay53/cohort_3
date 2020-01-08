import React from 'react'
import Add from './component/Add';
import Todo from './component/Todo';
import CompletedTodo from './component/CompletedTodo';

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
          id:Date.now()
      }

      this.setState({
          todo:[...this.state.todo, newItem]
      })
    }

    // toggleDone = (id) =>{
    //     this.setState({
    //         todo:this.state.todo.map((item) => {
    //             return
    //                 if(id === item.id){
    //                  return {...item,isDone:!item.isDone}
    //                 }
    //                  else{
    //                     return {item:item}
    //                  }
    //                 }
    //         )
    //     })
    // }

    taskDone = (id) =>{
        this.setState({
            todo:this.state.todo.map(item =>
                id === item.id ? {...item,isDone:true} : item
            )
        })
    }

    handleDel = (id) =>{
        // console.log('handleDel')
        this.setState({
            todo: this.state.todo.filter(item => item.id !== id)
        })
 
   }

   handleshowCompleted=()=>{
       this.setState({
           showCompleted: true})
       }

    render(){
        // console.log(this.state.todo)
        return (
                <div style={{width:'400px',margin:'50px auto'}} className='border border-dark shadow bg bg-info p-5'>
                    <h3>This is your Todo List</h3>
                    <Add add={this.handleAdd}/>
                    <Todo data={this.state.todo} taskDone={this.taskDone}  label={'TODO:'} del={this.handleDel}/>
                    {/* <button className='btn btn-sm  mt-5 btn-primary' onClick={this.handleshowCompleted}>SHOW COMPLETED TODO</button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */}
                 
                    <CompletedTodo data={this.state.todo.filter(item => item.isDone)}
                    taskDone={this.taskDone} 
                                   label={'COMPLETED TODO ARE:'} 
                                   del={this.handleDel}
                                   />
                </div>  
                   
        )
    }
}

export default App