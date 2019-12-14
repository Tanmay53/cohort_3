import React from 'react'
import Restaurent from './Components/Cards.js'
import './App.css'


class App extends React.Component{
  constructor(props){
    super(props)
    this.restaurentDetails = [
      {
        name:'Udupi restaurent',
        type:['Continental','Pizza','Snacks'],
        cost:300,
        payment:['online','UPI'],
        totalVotes:766,
        reviews:522,
        rating:1.0
      },
      {
        name:'Sagar restaurent',
        type:['Continental','South','Snacks'],
        cost:150,
        payment:['online'],
        totalVotes:766,
        reviews:522,
        rating:2.2
      },
      {
        name:'Brar Cafe',
        type:['Coffee','Pizza','Snacks'],
        cost:450,
        payment:['online','NB'],
        totalVotes:366,
        reviews:529,
        rating:3.4
      },
      {
        name:'Sangam',
        type:['Coffee','frooty'],
        cost:250,
        payment:['online','NB'],
        totalVotes:356,
        reviews:429,
        rating:3.9
      },
      {
        name:'Rosmor',
        type:['Dine','Buffet'],
        cost:750,
        payment:['online','NB'],
        totalVotes:366,
        reviews:1002,
        rating:4.7
      },
      {
        name:'Black Blor',
        type:['Coffee','Tea','Biscuit'],
        cost:150,
        payment:['online','NB'],
        totalVotes:1066,
        reviews:899,
        rating:3.3
      },
      {
        name:'Srikanta',
        type:['Lunch','Snacks'],
        cost:250,
        payment:['online','Cash'],
        totalVotes:566,
        reviews:129,
        rating:3.7
      },
      {
        name:'Daily dose',
        type:['Sweets','Snacks'],
        cost:250,
        payment:['online','NB'],
        totalVotes:246,
        reviews:429,
        rating:5.0
      },
      {
        name:'Naturals',
        type:['Icecream'],
        cost:270,
        payment:['online','Cash'],
        totalVotes:166,
        reviews:379,
        rating:2.3
      }
    ];
    this.state = {
      filteredObj:[]
    }
  }

  oneStar = () =>{
    this.setState({ 
      filteredObj:this.restaurentDetails.filter(ele=>(ele.rating>=1))
    })
  }

  twoStar = () =>{
    this.setState({ 
      filteredObj:this.restaurentDetails.filter(ele=>(ele.rating>=2))
    })
  }

  threeStar = () =>{
    this.setState({ 
      filteredObj:this.restaurentDetails.filter(ele=>(ele.rating>=3))
    })
  }

  fourStar = () =>{
    this.setState({ 
      filteredObj:this.restaurentDetails.filter(ele=>(ele.rating>=4))
    })
  }

  sort = () =>{
    this.setState({ 
      filteredObj:this.restaurentDetails.sort((a,b)=>(b.rating-a.rating))
    })
  }


  render() {
    return ( 
      <div>
          <button onClick={this.oneStar}>1 star</button>
          <button onClick={this.twoStar}>2 star</button>
          <button onClick={this.threeStar}>3 star</button>
          <button onClick={this.fourStar}>4 star</button>  
          <button onClick={this.sort}>sort</button>
           <div>
             {this.state.filteredObj.map(ele=><Restaurent key={ele} info={ele}/>)}  
           </div>
      </div>
     )
  } 
 
}

export default App