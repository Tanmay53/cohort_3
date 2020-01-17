import React from 'react'
import {addTodo,writeTodo,store} from './redux/actions'
import ShowcaseTodo from './Components/ShowcaseTodo'
import CompletedTodo from './Components/CompletedTodo'


export const App = (props) =>{
    return (
      <div>
          <h1>Todo App</h1>
          <input type='text' value={store.getState().currentValue} className='input m-2' onChange={(e)=>store.dispatch(writeTodo(e.target.value.toLocaleUpperCase()))} placeholder='add todo' />
          <button className='btn btn-primary m-2 btn-sm' onClick={()=>store.dispatch(addTodo())}>add todo</button>
          <br />
          <ShowcaseTodo />
          Below are completed todo:
          <CompletedTodo />
      </div>
    )
}
