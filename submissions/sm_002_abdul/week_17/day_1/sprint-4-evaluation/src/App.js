import React from 'react';
import './App.css';

import Form from './Component/Form'
import Table from './Component/Table'
import Movies from './Component/Movies'

var globalMovieData=[]

class App extends React.Component{
  constructor(){
    super()
    this.state={
      name:'',
      summary:'',
      leadActor:'',
      leadActress:'',
      director:'',
      imageUrl:'',
      rating:'',
      year:'',
      language:'',
      rRating:'',
      currentData:[]
    }

    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  componentDidMount(){
    localStorage.setItem('movie',JSON.stringify(globalMovieData)); 

    if (localStorage.length===0){
      this.setState({
        currentData:[]
      })
    }
    else{
      this.setState({
        currentData:[...JSON.parse(localStorage.getItem('movie'))]
      })
    }
  }

  handleChange=(event)=>{
    event.target.type==='checkbox'
    ? 
    this.setState({
      [event.target.name]:event.target.checked
    }) :
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  handleSubmit=(event)=>{
    //console.log('after submission',this.state)
    event.preventDefault()
    globalMovieData.push(this.state)
    localStorage.setItem('movie',JSON.stringify(globalMovieData));

    this.setState({
      currentData:[...JSON.parse(localStorage.getItem('movie'))]
    })

    console.log('current data array after submission',this.state.currentData)
  }


  render(){
    console.log('render called', this.state)
    return(
      <div className='bg-light'>

        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>

        <table className='table table-striped shadow p-3 mb-5 bg-white rounded'>
          <thead>
            <tr>
              <th>Movie Name</th>
              <th>Rating</th>
              <th>URL</th>
              <th>Language</th>
              <th>R- Rated</th>
            </tr>
          </thead>

          {this.state.currentData ?

            this.state.currentData.map((element,index)=>{
              return <Table key={index} index={index} item={element}/>
            })
          :
            'No Data Found'
          }

        </table>

        <div>
          {this.state.currentData.map((elem,index)=>{
            return <Movies key={index} item={elem}/>
          })}
        </div>

      </div>


    )
  }
}


export default App;
