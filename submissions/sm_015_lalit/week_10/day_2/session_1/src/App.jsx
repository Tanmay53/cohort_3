import React from 'react'
import DisplayAllTasks from './components/DisplayAllTasks'
import InputTasks from './components/InputTasks'

export default class App extends React.Component{
  render(){
    return(
      <>
      <InputTasks/>
      <DisplayAllTasks/>
      </>
    )
  }
}